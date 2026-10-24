export const siteConfig = {
  name: "Huella Pública",
  tagline: "Lo que publicamos, deja huella.",
  description:
    "Plataforma argentina en desarrollo para consultar, con contexto y verificación editorial, publicaciones públicas que reproducen discursos machistas o violentos hacia las mujeres.",
  locale: "es_AR",
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: readonly NavItem[] = [
  { href: "/buscar", label: "Consultar" },
  { href: "/criterios", label: "Criterios editoriales" },
  { href: "/recursos", label: "Recursos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export const reportNavItem: NavItem = { href: "/reportar", label: "Enviar información" };
