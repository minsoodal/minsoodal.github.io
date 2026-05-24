import { useState } from "react";
import { news } from "../data/news.js";

function HighlightText({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="highlight-organic">{highlight}</span>
      {after}
    </>
  );
}

export default function NewsSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleNews = expanded ? news : news.slice(0, 5);

  return (
    <section className="marginalia-section" aria-labelledby="news-heading">
      <div className="marginalia-container">
        <h2 id="news-heading" className="marginalia-label">News</h2>
        <div className={`marginalia-items-wrapper ${expanded ? "expanded" : ""}`}>
          <div className="marginalia-items">
            {visibleNews.map((item, index) => (
              <div className="marginalia-item" key={`${item.date}-${index}`}>
                <span className="marginalia-date">{item.date}</span>
                <span className="marginalia-text">
                  <HighlightText text={item.text} highlight={item.highlight} />
                </span>
              </div>
            ))}
          </div>
          {news.length > 5 && (
            <button type="button" className="marginalia-toggle" onClick={() => setExpanded((value) => !value)}>
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
