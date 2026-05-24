import { socialLinks } from "../data/site.js";
import SocialLink from "./SocialLink.jsx";
import TypewriterText from "./TypewriterText.jsx";

export default function BioCard({ setActivePage }) {
  return (
    <section className="bio-card" aria-label="Homepage introduction">
      <TypewriterText/>
      <div className="bio-grid">
        <div className="bio-social">
          <img className="bio-photo" src="/profile.png" alt="Profile photo" />
          <div className="social-links">
            {socialLinks.map((item) => <SocialLink key={item.label} item={item} />)}
          </div>
        </div>

        <div className="bio-right">
          <div>
            <p>
              I'm an <span className="highlight-organic-yellow">AI engineer</span> at Mayo Clinic, where I build AI-powered clinical decision support tools for efficient patient care. My work sits at the bridge between research and real-world deployment: designing <span className="highlight-organic">AI agents</span>, optimizing <span className="highlight-organic">LLM reasoning</span> with <span className="highlight-organic">human-in-the-loop evaluation</span> to keep things safe and trustworthy in clinical settings.
            </p>
            {/* <TypewriterText /> */}
            <p>
              {/* My current work centers on{" "}
              <button type="button" className="inline-link" onClick={() => setActivePage("publications")}>
                HERMES-AI
              </button> */}
              Before Mayo Clinic, I did research at the University of Massachusetts Lowell and the University of Minnesota. I received an MS in Computer Science from University of Massachusetts Amherst. My research areas span <button type="button" className="inline-link"><span className="highlight-organic">LLM evaluation</span></button>, <button type="button" className="inline-link"><span className="highlight-organic">human-AI collaboration</span></button>, and <button type="button" className="inline-link"><span className="highlight-organic">computational epidemiology</span></button>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
