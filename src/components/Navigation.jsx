import { pages } from "../data/site.js";

export default function Navigation({ activePage, navigate }) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <button type="button" className="site-title" onClick={() => navigate("home")}>Minhwa Lee</button>
      <div className="site-links">
        {pages.slice(1).map((page) => (
          <button
            type="button"
            key={page.key}
            className={activePage === page.key ? "active" : ""}
            onClick={() => navigate(page.key)}
          >
            {page.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
