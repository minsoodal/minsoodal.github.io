import { filterTags, publicationYears } from "../data/publications.js";

function KeywordFilterButtons({ activeFilter, setActiveFilter }) {
  return (
    <div className="keyword-filter-buttons" aria-label="Filter publications by keyword">
      {filterTags.map((tag) => (
        <button
          type="button"
          key={tag}
          className={`keyword-filter-button ${activeFilter === tag ? "active" : ""}`}
          onClick={() => setActiveFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function YearDropdown({ activeYear, setActiveYear }) {
  return (
    <label className="year-filter-label">
      <span>Year</span>
      <select
        className="year-filter-select"
        value={activeYear}
        onChange={(event) => setActiveYear(event.target.value)}
      >
        {publicationYears.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </label>
  );
}

export default function PublicationControls({ activeFilter, setActiveFilter, activeYear, setActiveYear }) {
  return (
    <div className="publication-controls">
      <KeywordFilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <YearDropdown activeYear={activeYear} setActiveYear={setActiveYear} />
    </div>
  );
}
