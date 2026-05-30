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
        // eyebrow="Research Output"
        title="Publications"
        // description="My research have generally spanned LLM evaluation, human-AI collaboration with HCI perspectives, and computational epidemiology.
        // * denotes equal contributions."
        description={<>
          My research has generally spanned LLM evaluation, human-AI collaboration with HCI perspectives, and computational epidemiology.
          <br /><br />
          See my <a href="https://scholar.google.com/citations?user=8lhVY7sAAAAJ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textDecorationStyle: "dashed", textUnderlineOffset: "3px" }}>Google Scholar</a> for the latest updates. <b>*</b> denotes equal contribution.
        </>}
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
