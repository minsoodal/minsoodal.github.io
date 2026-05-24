import React, { useState } from "react";

function PublicationThumbnail({ label }) {
  const isImage = label.startsWith("/");
  return (
    <div className="row-icon">
      <div className="publication-icon" aria-hidden="true">
        {isImage
          ? <img src={label} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
          : label.split("\n").map((line) => <span key={line}>{line}</span>)
        }
      </div>
    </div>
  );
}

function PublicationLinks({ urls, featuredLink, abstractOpen, onToggleAbstract }) {
  return (
    <div className="publication-links">
      {featuredLink && (
        <span className="featured-wrap">
          <span className="highlight-organic">◆ <a href={urls[featuredLink] || "#"} target="_blank" rel="noopener noreferrer">{featuredLink}</a></span>
        </span>
      )}
      <span className="featured-wrap">
        <span className="highlight-organic-yellow">◆ <button
          type="button"
          className={`publication-action ${abstractOpen ? "active" : ""}`}
          onClick={onToggleAbstract}
          aria-expanded={abstractOpen}
        >Abstract</button></span>
      </span>
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
              <span className={author.replace("*", "") === "Minhwa Lee" ? "author-self" : ""}>{author}</span>
            </React.Fragment>
          ))}
        </p>
        <p className="publication-journal">{paper.venue}</p>
        <PublicationLinks
          urls={paper.urls || {}}
          featuredLink={paper.featuredLink}
          abstractOpen={abstractOpen}
          onToggleAbstract={() => setAbstractOpen((value) => !value)}
        />
      </div>
      {abstractOpen && <p className="publication-abstract-panel">{paper.description}</p>}
    </article>
  );
}
