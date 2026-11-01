export default function ProjectCard({ item, onOpen }) {
  const hasProjectPage = typeof item.content === "string" && item.content.trim().length > 0;

  return (
    <article
      className={`project-card${hasProjectPage ? " project-card--clickable" : ""}`}
      onClick={() => hasProjectPage && onOpen(item.id)}
      role={hasProjectPage ? "button" : undefined}
      tabIndex={hasProjectPage ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && hasProjectPage && onOpen(item.id)}
    >
      <div className="project-card-thumbnail">
        {item.image ? (
          <img src={item.image} alt={item.title} className="project-card-image" />
        ) : (
          <div className="project-card-image-placeholder" />
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-meta">
          {item.year && <span className="project-card-year">{item.year}</span>}
          {item.category && <span className="project-card-category">{item.category}</span>}
        </div>
        <h3 className="project-card-title">{item.title}</h3>
        <p className="project-card-description">{item.description}</p>
      </div>
    </article>
  );
}
