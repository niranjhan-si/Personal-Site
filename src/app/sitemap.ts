import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `https://niranjhan.com${route}`,
    lastModified: new Date(),
  }));
}
