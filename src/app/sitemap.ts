import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/blog", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `https://niranjhan.com${route}`,
    lastModified: new Date(),
  }));
}
