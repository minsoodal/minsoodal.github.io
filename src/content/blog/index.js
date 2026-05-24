import { parseFrontMatter } from "../../utils/frontMatter.js";

const modules = import.meta.glob("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function sortByDateDesc(a, b) {
  const aDate = new Date(a.dateSortKey || a.date);
  const bDate = new Date(b.dateSortKey || b.date);
  return bDate - aDate;
}

export const blogPosts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontMatter(raw);
    const fileId = path.replace("./", "").replace(/\.md$/, "");

    return {
      id: data.id || fileId,
      date: data.date || "Undated",
      dateSortKey: data.dateSortKey || data.date || "",
      category: data.category || "Notes",
      readingTime: data.readingTime || "",
      title: data.title || fileId,
      excerpt: data.excerpt || "",
      links: Array.isArray(data.links) ? data.links : [],
      content,
      sourcePath: path,
    };
  })
  .sort(sortByDateDesc);
