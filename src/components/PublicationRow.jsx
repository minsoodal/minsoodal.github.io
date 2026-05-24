import React, { useState } from "react";

function PublicationThumbnail({ label }) {
  return (
    <div className="row-icon">
      <a href="#" aria-label={label}>
        <div className="publication-icon" aria-hidden="true">
          {label.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </a>
    </div>
  );
}

function PublicationLinks({ links, featuredLink, abstractOpen, onToggleAbstract }) {
  return (
    <div className="publication-links">
      {featuredLink && (
        <span className="featured-wrap">
          <span className="highlight-organic">◆ <a href="#">{featuredLink}</a></span>
        </span>
      )}
      <button
        type="button"
        className={`publication-action ${abstractOpen ? "active" : ""}`}
        onClick={onToggleAbstract}
        aria-expanded={abstractOpen}
      >
        ▸ Abstract
      </button>
      {links.map((link) => (
        <span className="link-item" key={link}>
          <span aria-hidden="true">▸</span> <a href="#">{link}</a>
        </span>
      ))}
    </div>
  );
}

export default function PublicationRow({ paper }) {
  const [abstractOpen, setAbstractOpen] = useState(false);

  return (
    <article className="publication-row" data-tags={paper.tags.join(" ")}>
      <PublicationThumbnail label={paper.thumbnail} />
      <div className="row-content">
        <h3 className="publication-title"><a href="#">{paper.title}</a></h3>
        <p className="publication-authors">
          {paper.authors.map((author, index) => (
            <React.Fragment key={author}>
              {index > 0 ? ", " : ""}
              <span className={author === "Minhwa Lee" ? "author-self" : ""}>{author}</span>
            </React.Fragment>
          ))}
        </p>
        <p className="publication-journal">{paper.venue}</p>
        <PublicationLinks
          links={paper.links}
          featuredLink={paper.featuredLink}
          abstractOpen={abstractOpen}
          onToggleAbstract={() => setAbstractOpen((value) => !value)}
        />
        {abstractOpen && <p className="publication-abstract-panel">{paper.description}</p>}
      </div>
    </article>
  );
}
