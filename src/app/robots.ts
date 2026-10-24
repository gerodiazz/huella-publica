import type { MetadataRoute } from "next";

// Mientras el proyecto no tenga aprobación de lanzamiento, se bloquea todo rastreo.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
