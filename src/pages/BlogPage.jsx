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
            // eyebrow="Short Essays"
            title="Blog"
            description={<>
            Thinking out loud about AI and life thoughts -- sometimes in Korean 🇰🇷 for the personal things.
            <br />
          {/* See my <a href="https://scholar.google.com/citations?user=8lhVY7sAAAAJ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textDecorationStyle: "dashed", textUnderlineOffset: "3px" }}>Google Scholar</a> for the latest updates. <b>*</b> denotes equal contribution. */}
        </>}
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
