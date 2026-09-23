const USERNAME = "niranjhan-si";
const EXCLUDE_REPOS = new Set(["Personal-Site"]);

const WRITEUP_URLS: Record<string, string> = {
  miniRAG: "https://niranjhan.substack.com/p/i-built-a-local-rag-pipeline-to-avoid",
  notesMCP: "https://niranjhan.substack.com/p/connecting-my-apple-notes-to-claude",
  TinyTabTimer: "https://niranjhan.substack.com/p/tinytabtimer",
};

export type GithubProject = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  pushedAt: string;
  writeupUrl?: string;
};

export async function getGithubProjects(limit = 6): Promise<GithubProject[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=20`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return [];

    const repos = (await res.json()) as Array<{
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      stargazers_count: number;
      pushed_at: string;
      fork: boolean;
    }>;

    return repos
      .filter((r) => !r.fork && !EXCLUDE_REPOS.has(r.name))
      .slice(0, limit)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        pushedAt: r.pushed_at,
        writeupUrl: WRITEUP_URLS[r.name],
      }));
  } catch {
    return [];
  }
}
