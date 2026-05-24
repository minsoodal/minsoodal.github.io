import { pages, typewriterSentence } from "../data/site.js";
import { news } from "../data/news.js";
import { filterTags, publicationYears, publications } from "../data/publications.js";
import { blogPosts } from "../content/blog/index.js";
import { projects } from "../content/projects/index.js";

export function runContentTests() {
  const expectedPageKeys = ["home", "publications", "blog", "projects"];
  expectedPageKeys.forEach((pageKey) => {
    console.assert(pages.some((page) => page.key === pageKey), `Missing page route: ${pageKey}`);
  });

  console.assert(pages.length === expectedPageKeys.length, "Expected one home page plus three dedicated content pages.");
  console.assert(typewriterSentence.length > 20, "Homepage typewriter sentence should be meaningful and visible.");
  console.assert(news.length >= 6, "Home page should include enough news items for Show more/less.");
  console.assert(filterTags.includes("All"), "Publication filters must include All.");
  console.assert(publicationYears.includes("All years"), "Publication year filter must include All years.");
  console.assert(publications.length >= 4, "Expected at least four publication rows.");
  console.assert(blogPosts.length >= 3, "Expected at least three blog post rows.");
  blogPosts.forEach((post) => {
    ["id", "title", "date", "category", "excerpt", "content"].forEach((field) => {
      console.assert(Boolean(post[field]), `Blog post is missing ${field}: ${post.id || post.title}`);
    });
  });
  console.assert(blogPosts.some((post) => typeof post.content === "string" && post.content.trim().length > 0), "Expected at least one Markdown blog post with full article content.");
  console.assert(projects.length >= 2, "Expected at least two project rows.");
  projects.forEach((project) => {
    ["id", "title", "year", "description", "content"].forEach((field) => {
      console.assert(Boolean(project[field]), `Project is missing ${field}: ${project.id || project.title}`);
    });
    console.assert(Array.isArray(project.links), `Project links must be an array: ${project.id}`);
    console.assert(Array.isArray(project.stack), `Project stack must be an array: ${project.id}`);
    console.assert(Array.isArray(project.goals), `Project goals must be an array: ${project.id}`);
  });
  console.assert(projects.some((project) => typeof project.content === "string" && project.content.trim().length > 0), "Expected at least one Markdown project with a full detail page.");

  const requiredPaperFields = ["id", "title", "authors", "venue", "year", "description", "tags", "links", "thumbnail"];
  publications.forEach((paper) => {
    requiredPaperFields.forEach((field) => {
      console.assert(Boolean(paper[field]), `Publication is missing ${field}: ${paper.id || paper.title}`);
    });
    console.assert(Array.isArray(paper.authors) && paper.authors.length > 0, `Publication authors must be populated: ${paper.id}`);
    console.assert(Array.isArray(paper.tags) && paper.tags.length > 0, `Publication tags must be populated: ${paper.id}`);
    console.assert(Array.isArray(paper.links) && paper.links.length > 0, `Publication links must be populated: ${paper.id}`);
  });

  filterTags
    .filter((tag) => tag !== "All")
    .forEach((tag) => {
      const count = publications.filter((paper) => paper.tags.includes(tag)).length;
      console.assert(count > 0, `Filter tag should match at least one publication: ${tag}`);
    });

  console.assert(publications.filter(() => true).length === publications.length, "All filter should return every publication.");
}
