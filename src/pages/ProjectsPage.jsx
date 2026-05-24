import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectRow from "../components/ProjectRow.jsx";
import ProjectArticle from "../components/ProjectArticle.jsx";
import { projects } from "../content/projects/index.js";

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <section id="projects" className="content-section page-section">
      {!selectedProject && (
        <>
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects"
            description="A dedicated page for technical projects, reusable analysis tools, demos, and website or manuscript-support utilities. Click the first project to preview a full project page."
          />
          {projects.map((item) => <ProjectRow key={item.id} item={item} onOpen={setSelectedProjectId} />)}
        </>
      )}
      {selectedProject && <ProjectArticle project={selectedProject} onBack={() => setSelectedProjectId(null)} />}
    </section>
  );
}
