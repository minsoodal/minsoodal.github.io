import { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import BackToTop, { scrollToTop } from "./components/BackToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import PublicationsPage from "./pages/PublicationsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { runContentTests } from "./utils/contentTests.js";

runContentTests();

export default function App() {
  const [activePage, setActivePage] = useState("home");

  function navigate(pageKey) {
    setActivePage(pageKey);
    scrollToTop();
  }

  return (
    <div className="academic-page">
      <Navigation activePage={activePage} navigate={navigate} />

      <main id="top">
        {activePage === "home" && <HomePage setActivePage={navigate} />}
        {activePage === "publications" && <PublicationsPage />}
        {activePage === "blog" && <BlogPage />}
        {activePage === "projects" && <ProjectsPage />}
      </main>

      <p className="template-credit">
        Design inspired by <a href="https://danielrjiang.github.io/">Dr. Daniel R. Jiang's website</a>. 
        The code for this website is available at this <a href="https://github.com/minsoodal/minsoodal.github.io">repo</a>.
      </p>
      <BackToTop />
    </div>
  );
}
