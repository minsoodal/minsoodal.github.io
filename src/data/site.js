import { SiGmail, SiGithub, SiGooglescholar } from "react-icons/si";

export const typewriterSentence = "How do we build AI that clinicians can actually trust and patients can benefit from?";

export const pages = [
  { key: "home", label: "Home" },
  { key: "publications", label: "Publications" },
  { key: "blog", label: "Blog" },
  { key: "projects", label: "Projects" },
];

export const socialLinks = [
  { label: "Email", href: "mailto:minhwalee.ai@gmail.com", icon: SiGmail},
  { label: "CV", href: "/cv.pdf", icon: "CV" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8lhVY7sAAAAJ&hl=en", icon: SiGooglescholar },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/minhwalee/", icon: "in" },
  { label: "GitHub", href: "https://github.com/minsoodal", icon: SiGithub },
];
