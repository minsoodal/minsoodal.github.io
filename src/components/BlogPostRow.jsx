export default function BlogPostRow({ item, onRead }) {
  const hasFullPost = typeof item.content === "string" && item.content.trim().length > 0;

  return (
    <article className="blog-row">
      <div className="blog-date-block">
        <span>{item.date}</span>
      </div>
      <div className="row-content">
        <h3 className="publication-title">
          <button
            type="button"
            className="blog-title-button"
            onClick={() => hasFullPost && onRead(item.id)}
          >
            {item.title}
          </button>
        </h3>
        <p className="blog-meta-line">{item.category} · {item.readingTime}</p>
      </div>
    </article>
  );
}
