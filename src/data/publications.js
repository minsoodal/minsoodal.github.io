export const filterTags = ["All", "Clinical AI", "LLM", "RAG", "FHIR", "Evaluation"];

export const publications = [
  {
    id: "hermes-ai",
    title: "Real-world evaluation of an LLM-enabled clinical trial matching system in hospital workflows",
    authors: ["Minhwa Lee", "HERMES-AI Team"],
    venue: "Target: NEJM AI Case Study Track, 2026",
    year: 2026,
    description:
      "A real-world evaluation of a deployed clinical AI system for trial matching, focusing on criterion-level agreement, evidence quality, human feedback, processing time, and post-release improvements.",
    tags: ["Clinical AI", "LLM", "Evaluation"],
    links: ["PDF", "Appendix", "Poster"],
    featuredLink: "Manuscript",
    thumbnail: "HERMES\nAI",
  },
  {
    id: "deepmatcher",
    title: "Multi-agent retrieval and reasoning over longitudinal patient records for eligibility assessment",
    authors: ["Minhwa Lee", "Collaborators"],
    venue: "Technical report / internal R&D, 2026",
    year: 2026,
    description:
      "A multi-agent architecture for criteria decomposition, hybrid retrieval, evidence ranking, criterion-level reasoning, critic review, and parent-level eligibility aggregation.",
    tags: ["LLM", "RAG", "FHIR"],
    links: ["Architecture", "Slides", "Summary"],
    featuredLink: "System",
    thumbnail: "FHIR\nRAG",
  },
  {
    id: "evidence-quality",
    title: "Evidence quality analysis for human-AI clinical screening workflows",
    authors: ["Minhwa Lee", "Clinical Research Coordinator Reviewers"],
    venue: "Supplementary analysis, 2026",
    year: 2026,
    description:
      "A feedback-driven analysis of incorrect or insufficient evidence snippets, including primary error categories and qualitative themes from reviewer comments.",
    tags: ["Clinical AI", "Evaluation"],
    links: ["Tables", "Figures", "Methods"],
    featuredLink: "Analysis",
    thumbnail: "CRC\nReview",
  },
  {
    id: "fhir-agent",
    title: "FHIR-integrated retrieval for structured and unstructured clinical records",
    authors: ["Minhwa Lee"],
    venue: "Engineering note, 2026",
    year: 2026,
    description:
      "A retrieval layer that combines DocumentReference, DiagnosticReport, Observation, Condition, medication, allergy, OCR, and outside medical record sources for clinical trial screening.",
    tags: ["FHIR", "RAG"],
    links: ["Notes", "Diagram"],
    featuredLink: "Retrieval",
    thumbnail: "EHR\nFHIR",
  },
];

export const publicationYears = [
  "All years",
  ...Array.from(new Set(publications.map((paper) => String(paper.year)))).sort((a, b) => Number(b) - Number(a)),
];
