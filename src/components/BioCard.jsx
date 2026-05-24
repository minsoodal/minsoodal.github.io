import { socialLinks } from "../data/site.js";
import SocialLink from "./SocialLink.jsx";
import TypewriterText from "./TypewriterText.jsx";

export default function BioCard({ setActivePage }) {
  return (
    <section className="bio-card" aria-label="Homepage introduction">
      <TypewriterText />
      <div className="bio-grid">
        <div className="bio-social">
          <div className="bio-photo">Photo<br />placeholder</div>
          <div className="social-links">
            {socialLinks.map((item) => <SocialLink key={item.label} item={item} />)}
          </div>
        </div>

        <div className="bio-right">
          <div>
            <p>
              I'm an <span className="highlight-organic">AI engineer and clinical AI researcher</span> working on LLM/RAG systems, FHIR-integrated EHR retrieval, and human-AI evaluation for real-world healthcare workflows.
            </p>
            <p>
              My current work centers on{" "}
              <button type="button" className="inline-link" onClick={() => setActivePage("publications")}>
                HERMES-AI
              </button>
              , a multi-agent clinical trial matching system that connects eligibility criteria, patient records, hybrid retrieval, large language model reasoning, and clinical research coordinator review.
            </p>
            <p>
              Recent work includes: criterion decomposition and optimization; hybrid retrieval with BM25, FAISS embeddings, and reranking; parent-criterion reasoning; evidence-quality evaluation; and manuscript-ready analysis of deployment outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
