import { parseFrontMatter } from "../../utils/frontMatter.js";

const modules = import.meta.glob("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const projects = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontMatter(raw);
    const fileId = path.replace("./", "").replace(/\.md$/, "");

    return {
      id: data.id || fileId,
      title: data.title || fileId,
      subtitle: data.subtitle || "",
      category: data.category || "",
      status: data.status || "",
      year: data.year || "",
      image: data.image || "",
      description: data.description || "",
      links: Array.isArray(data.links) ? data.links : [],
      stack: Array.isArray(data.stack) ? data.stack : [],
      goals: Array.isArray(data.goals) ? data.goals : [],
      content,
      sourcePath: path,
    };
  })
  .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
