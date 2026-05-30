import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogArticle({ post, onBack }) {
  return (
    <article className="blog-article">
      <button type="button" className="back-link" onClick={onBack}>← Back to all posts</button>
      {/* <p className="blog-article-meta">{post.date} · {post.category} · {post.readingTime}</p> */}
      <h2 className="blog-article-title">{post.title}</h2>
      <p className="blog-article-dek">{post.excerpt}</p>
      <p ></p>
      <div className="blog-article-body markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
