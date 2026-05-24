import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import BlogPostRow from "../components/BlogPostRow.jsx";
import BlogArticle from "../components/BlogArticle.jsx";
import { blogPosts } from "../content/blog/index.js";

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const selectedPost = blogPosts.find((post) => post.id === selectedPostId);

  return (
    <section id="blog" className="content-section page-section">
      {!selectedPost && (
        <>
          <SectionHeader
            eyebrow="Short Essays"
            title="Blog Posts"
            description="A dedicated page for informal reflections, technical notes, research updates, and learning essays. Click the first post to preview a full article page."
          />
          {blogPosts.map((item) => (
            <BlogPostRow key={item.id} item={item} onRead={setSelectedPostId} />
          ))}
        </>
      )}
      {selectedPost && <BlogArticle post={selectedPost} onBack={() => setSelectedPostId(null)} />}
    </section>
  );
}
