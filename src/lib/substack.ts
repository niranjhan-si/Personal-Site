import { XMLParser } from "fast-xml-parser";

const FEED_URL = "https://niranjhan.substack.com/feed";

const PROJECT_URLS: Record<string, string> = {
  "/p/i-built-a-local-rag-pipeline-to-avoid": "https://github.com/niranjhan-si/miniRAG",
  "/p/connecting-my-apple-notes-to-claude": "https://github.com/niranjhan-si/notesMCP",
  "/p/tinytabtimer": "https://github.com/niranjhan-si/TinyTabTimer",
};

export type SubstackPost = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  projectUrl?: string;
};

export async function getSubstackPosts(limit = 5): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);

    const items = feed?.rss?.channel?.item;
    const list = Array.isArray(items) ? items : items ? [items] : [];

    return list.slice(0, limit).map((item) => {
      const link = String(item.link ?? "");
      const matchedPath = Object.keys(PROJECT_URLS).find((path) => link.includes(path));
      return {
        title: String(item.title ?? ""),
        link,
        description: String(item.description ?? ""),
        pubDate: String(item.pubDate ?? ""),
        projectUrl: matchedPath ? PROJECT_URLS[matchedPath] : undefined,
      };
    });
  } catch {
    return [];
  }
}
