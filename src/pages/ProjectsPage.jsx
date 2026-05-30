import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
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
            // eyebrow="Selected Work"
            title="Projects"
            description={<>A tiny research lab for human-centered AI, robotics, and collaborative system design, with a little hope that it brings social good somewhere on the roadmap. 
            <br /> <br />
            나만의 연구를 기록하는 공간. 이 곳이 사람들을 도울 수 있는 아이디어의 출발점이 되기를 바랍니다.</>}
          />
          <div className="projects-board">
            {projects.map((item) => <ProjectCard key={item.id} item={item} onOpen={setSelectedProjectId} />)}
          </div>
        </>
      )}
      {selectedProject && <ProjectArticle project={selectedProject} onBack={() => setSelectedProjectId(null)} />}
    </section>
  );
}
