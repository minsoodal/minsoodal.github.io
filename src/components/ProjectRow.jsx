export default function ProjectRow({ item, onOpen }) {
  const hasProjectPage = typeof item.content === "string" && item.content.trim().length > 0;

  return (
    <article className="project-row">
      <div className="row-icon project-icon">ML</div>
      <div className="row-content">
        <h3 className="publication-title">
          <button
            type="button"
            className="blog-title-button"
            onClick={() => hasProjectPage && onOpen(item.id)}
          >
            {item.title}
          </button>
        </h3>
        <p className="publication-journal journal-submitted">{item.subtitle} · {item.year} · {item.status}</p>
        <p className="publication-description-wrapper">{item.description}</p>
        <div className="publication-links">
          {hasProjectPage ? (
            <button type="button" className="publication-action" onClick={() => onOpen(item.id)}>
              ▸ View project
            </button>
          ) : (
            <span className="link-item muted">▸ Project preview</span>
          )}
          {item.links.map((link) => (
            <span className="link-item" key={link}>▸ <a href="#">{link}</a></span>
          ))}
        </div>
      </div>
    </article>
  );
}
