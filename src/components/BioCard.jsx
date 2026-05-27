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
          <p className="bio-origin">
            🇰🇷 Originally from South Korea<br />
            🇺🇸 Based in Minneapolis, MN
          </p>
        </div>

        <div className="bio-right">
          <div>
            <p>
              I'm an <span className="highlight-organic-yellow">AI engineer</span> working in clinical AI at Mayo Clinic, where I develop AI-powered clinical decision support tools to support efficient and trustworthy patient care. My work sits at the mix of research and deployment, focusing on <span className="highlight-organic">AI agents</span>, <span className="highlight-organic">LLM reasoning optimization </span> through <span className="highlight-organic">human-in-the-loop evaluation</span> to make sure safety and reliability in real-world clinical settings.

            </p>
            {/* <TypewriterText /> */}
            <p>
              {/* My current work centers on{" "}
              <button type="button" className="inline-link" onClick={() => setActivePage("publications")}>
                HERMES-AI
              </button> */}
              Previously, I conducted research at the University of Massachusetts Lowell and the University of Minnesota. I received an MS in Computer Science from University of Massachusetts Amherst. My research areas span <button type="button" className="inline-link"><span className="highlight-organic">LLM evaluation</span></button>, <button type="button" className="inline-link"><span className="highlight-organic">human-AI collaboration</span></button>, and <button type="button" className="inline-link"><span className="highlight-organic">computational epidemiology</span></button>.
            </p>
            <b>
              My long-term vision is to build trustworthy AI that makes high-quality healthcare more accessible and affordable, particularly for communities who have historically had the greatest barriers to care.
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
