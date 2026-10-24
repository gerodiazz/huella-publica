import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", h1: "Lo que publicamos, deja huella." },
  { path: "/buscar", h1: "Consultar registros verificados" },
  { path: "/reportar", h1: "Cómo vas a poder enviar una publicación" },
  { path: "/criterios", h1: "Cómo se evaluará cada publicación" },
  { path: "/recursos", h1: "Recursos educativos y ayuda" },
  { path: "/preguntas-frecuentes", h1: "Preguntas frecuentes" },
  { path: "/contacto", h1: "Contacto" },
];

for (const route of routes) {
  test.describe(`Página ${route.path}`, () => {
    test("carga con estructura, metadatos y cabeceras esperadas", async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);

      const headers = response?.headers() ?? {};
      expect(headers["x-robots-tag"]).toContain("noindex");
      expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
      expect(headers["x-content-type-options"]).toBe("nosniff");
      expect(headers["x-powered-by"]).toBeUndefined();

      await expect(page.locator("html")).toHaveAttribute("lang", "es-AR");
      await expect(page).toHaveTitle(/Huella Pública/);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.h1);
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.getByRole("main")).toBeVisible();
      await expect(page.getByRole("contentinfo")).toBeVisible();

      expect(consoleErrors).toEqual([]);
    });

    test("no tiene violaciones de accesibilidad serias o críticas", async ({ page }) => {
      await page.goto(route.path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const relevant = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(relevant.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
    });

    test("no genera desplazamiento horizontal", async ({ page }) => {
      await page.goto(route.path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  });
}

test("el enlace para saltar al contenido es el primer elemento enfocable", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium");
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Saltar al contenido" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#contenido")).toBeFocused();
});

test("el buscador es solo visual y no permite enviar consultas", async ({ page }) => {
  await page.goto("/buscar");
  await expect(page.getByLabel("Nombre").first()).toBeDisabled();
  await expect(page.getByLabel("Apellido").first()).toBeDisabled();
  await expect(page.getByRole("button", { name: "Buscar" }).first()).toBeDisabled();
  await expect(page.getByText("Consulta en preparación.").first()).toBeVisible();
});

test("la página de envío no contiene campos de formulario ni carga de archivos", async ({ page }) => {
  await page.goto("/reportar");
  await expect(page.locator("form, input, textarea, select")).toHaveCount(0);
});

test("el menú móvil se abre, se cierra con Escape y devuelve el foco", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Solo aplica al viewport móvil");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menú" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const mobileLink = page.getByRole("navigation", { name: "Navegación principal" }).getByRole("link", { name: "Recursos" });
  await expect(mobileLink).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();

  await toggle.click();
  await mobileLink.click();
  await expect(page).toHaveURL(/\/recursos$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Recursos educativos y ayuda");
});

test("la navegación de escritorio marca la página actual", async ({ page, isMobile }) => {
  test.skip(isMobile, "Solo aplica al viewport de escritorio");
  await page.goto("/criterios");
  const current = page
    .getByRole("navigation", { name: "Navegación principal" })
    .getByRole("link", { name: "Criterios editoriales" })
    .first();
  await expect(current).toHaveAttribute("aria-current", "page");
});

test("robots.txt bloquea el rastreo", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  expect(await response.text()).toMatch(/Disallow: \/\s*$/m);
});

test("una ruta inexistente devuelve 404 con página propia", async ({ page }) => {
  const response = await page.goto("/ruta-inexistente");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("No encontramos esta página");
});
