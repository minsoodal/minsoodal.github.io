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
        Design adapted for Minhwa Lee's academic homepage, with a news-focused home page and dedicated content pages.
      </p>
      <BackToTop />
    </div>
  );
}
