export default function BlogPostRow({ item, onRead }) {
  const hasFullPost = typeof item.content === "string" && item.content.trim().length > 0;

  return (
    <article className="blog-row">
      <div className="blog-date-block">
        <span>{item.date}</span>
        <small>{item.category}</small>
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
        <p className="publication-description-wrapper">{item.excerpt}</p>
        <div className="publication-links">
          {hasFullPost ? (
            <button type="button" className="publication-action" onClick={() => onRead(item.id)}>
              ▸ Read post
            </button>
          ) : (
            <span className="link-item muted">▸ Draft preview</span>
          )}
          {item.links.map((link) => (
            <span className="link-item" key={link}>▸ <a href="#">{link}</a></span>
          ))}
        </div>
      </div>
    </article>
  );
}
