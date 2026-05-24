import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectArticle({ project, onBack }) {
  return (
    <article className="project-article">
      <button type="button" className="back-link" onClick={onBack}>← Back to all projects</button>
      <p className="blog-article-meta">{project.year} · {project.status}</p>
      <h2 className="blog-article-title">{project.title}</h2>
      <p className="blog-article-dek">{project.description}</p>

      {(project.goals.length > 0 || project.stack.length > 0) && (
        <div className="project-summary-grid">
          {project.goals.length > 0 && (
            <div className="project-summary-card">
              <h3>Goals</h3>
              <ul>
                {project.goals.map((goal) => <li key={goal}>{goal}</li>)}
              </ul>
            </div>
          )}
          {project.stack.length > 0 && (
            <div className="project-summary-card">
              <h3>Stack</h3>
              <div className="project-stack-tags">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="blog-article-body project-body markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
      </div>
    </article>
  );
}
