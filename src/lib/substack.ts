import { XMLParser } from "fast-xml-parser";

const FEED_URL = "https://niranjhan.substack.com/feed";

export type SubstackPost = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
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

    return list.slice(0, limit).map((item) => ({
      title: String(item.title ?? ""),
      link: String(item.link ?? ""),
      description: String(item.description ?? ""),
      pubDate: String(item.pubDate ?? ""),
    }));
  } catch {
    return [];
  }
}
