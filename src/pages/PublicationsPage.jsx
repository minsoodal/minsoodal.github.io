import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import PublicationControls from "../components/PublicationControls.jsx";
import PublicationRow from "../components/PublicationRow.jsx";
import { publications } from "../data/publications.js";

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeYear, setActiveYear] = useState("All years");

  const filteredPublications = useMemo(() => {
    return publications.filter((paper) => {
      const matchesKeyword = activeFilter === "All" || paper.tags.includes(activeFilter);
      const matchesYear = activeYear === "All years" || String(paper.year) === activeYear;
      return matchesKeyword && matchesYear;
    });
  }, [activeFilter, activeYear]);

  return (
    <section id="publications" className="content-section page-section">
      <SectionHeader
        eyebrow="Research Output"
        title="Publications and Papers Under Review"
        description="A dedicated page for manuscripts, technical reports, supplementary analyses, and project-linked research artifacts."
      />
      <PublicationControls
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeYear={activeYear}
        setActiveYear={setActiveYear}
      />
      <div aria-live="polite">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((paper) => <PublicationRow key={paper.id} paper={paper} />)
        ) : (
          <p className="empty-state">No publications match the selected filters.</p>
        )}
      </div>
    </section>
  );
}
