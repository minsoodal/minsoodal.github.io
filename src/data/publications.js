export const filterTags = ["All", "LLM Eval", "HAI", "CE"];

export const publications = [

  {
    id: "food-pantry-disparities",
    title: "Socioeconomic, Demographic and Geographic Disparities in Accessibility to Food Pantries in the United States",
    authors: ["Y Zhang*", "Minhwa Lee*", "JB Gibbons", "HY Chen", "Y Wang", "Z Yao", "O Bennett", "et al."],
    venue: "Scientific Reports, 2026",
    year: 2026,
    description:
      "Improving access to food pantries (FPs) may help address food insecurity, yet national-level assessments of geographic and socioeconomic disparities remain limited. We created a dataset of 34,475 FPs across all 50 states and the District of Columbia and analyzed their accessibility to the nearest Census block group (BG). We defined accessibility as high, medium, or low based on travel time or distance. Analyses of 239,780 BGs showed that 23.4% had low FP access. We identified geographic disparities across regions and states. For example, states in the Northeast generally have higher FP accessibility, while those in the South show lower access. Although rural BGs are more socioeconomically disadvantaged than urban ones (mean ADI: 71.3 vs. 45.8), they generally have better FP access (only 8.5% with low access vs. 26.5% in urban areas). However, some rural BGs with low FP accessibility tend to have high ADI values. In urban areas, FP placement shows relatively good alignment withneighborhood needs based on analyses of socioeconomic characteristics. In contrast, rural access patterns are more mixed. For example, less-educated rural populations face greater barriers. Findings from this study can inform policy and implementation strategies to improve FP access in underserved communities.",
    tags: ["CE"],
    links: ["Paper"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://www.nature.com/articles/s41598-026-35784-z",
    },
    thumbnail: "/papers/food-pantry.png",
  },
  {
    id: "scholawrite",
    title: "ScholaWrite: A Dataset of End-to-End Scholarly Writing Process",
    authors: ["KC Le*", "L Wang*", "Minhwa Lee*", "R Volkov", "LT Chau", "D Kang"],
    venue: "ACL 2026",
    year: 2026,
    description:
      "Writing is a cognitively demanding activity that requires constant decision-making, heavy reliance on working memory, and frequent shifts between tasks of different goals. To build writing assistants that truly align with writers' cognition, we must capture and decode the complete thought process behind how writers transform ideas into final texts. We present ScholaWrite, the first dataset of end-to-end scholarly writing, tracing the multi-month journey from initial drafts to final manuscripts. We contribute three key advances: (1) a Chrome extension that unobtrusively records keystrokes on Overleaf, enabling the collection of realistic, in-situ writing data; (2) a novel corpus of full scholarly manuscripts, enriched with fine-grained annotations of cognitive writing intentions. The dataset includes \LaTeX-based edits from five computer science preprints, capturing nearly 62K text changes over four months; and (3) analyses and insights into the micro-dynamics of scholarly writing, highlighting gaps between human writing processes and the current capabilities of large language models (LLMs) in providing meaningful assistance. ScholaWrite underscores the value of capturing end-to-end writing data to develop future writing assistants that support, not replace, the cognitive work of scientists.",
    tags: ["HAI", "LLM Eval"],
    links: [],
    featuredLink: "arXiv",
    urls: {
      "arXiv": "https://arxiv.org/abs/2502.02904",
    },
    thumbnail: "/papers/scholawrite.png",
  },
  {
    id: "diverse-perspectives-llm",
    title: "How Far Can We Extract Diverse Perspectives from Large Language Models?",
    authors: ["SA Hayati", "Minhwa Lee", "D Rajagopal", "D Kang"],
    venue: "EMNLP 2024",
    year: 2024,
    description:
      "Collecting diverse human opinions is costly and challenging. This leads to a recent trend in exploiting large language models (LLMs) for generating diverse data for potential scalable and efficient solutions. However, the extent to which LLMs can generate diverse perspectives on subjective topics is still unclear. In this study, we explore LLMs’ capacity of generating diverse perspectives and rationales on subjective topics such as social norms and argumentative texts. We introduce the problem of extracting maximum diversity from LLMs. Motivated by how humans form opinions based on values, we propose a criteria-based prompting technique to ground diverse opinions. To see how far we can extract diverse perspectives from LLMs, or called diversity coverage, we employ a step-by-step recall prompting to generate more outputs from the model iteratively. Our methods, applied to various tasks, show that LLMs can indeed produce diverse opinions according to the degree of task subjectivity. We also find that LLMs performance of extracting maximum diversity is on par with human.",
    tags: ["LLM Eval"],
    links: ["Paper"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://aclanthology.org/2024.emnlp-main.306/",
      // "PDF": "https://aclanthology.org/2024.emnlp-main.306.pdf",
    },
    thumbnail: "/papers/diversity.png",
  },
  {
    id: "cognitive-biases-llm-evaluators",
    title: "Benchmarking Cognitive Biases in Large Language Models as Evaluators",
    authors: ["R Koo", "Minhwa Lee", "V Raheja", "JI Park", "ZM Kim", "D Kang"],
    venue: "Findings of ACL 2024",
    year: 2024,
    description:
      "Large Language Models (LLMs) have recently been shown to be effective as automatic evaluators with simple prompting and in-context learning. In this work, we assemble 16 LLMs encompassing four different size ranges and evaluate their output responses by preference ranking from the other LLMs as evaluators, such as System Star is better than System Square. We then evaluate the quality of ranking outputs introducing the Cognitive Bias Benchmark for LLMs as Evaluators (CoBBLer), a benchmark to measure six different cognitive biases in LLM evaluation outputs, such as the Egocentric bias where a model prefers to rank its own outputs highly in evaluation. We find that LLMs are biased text quality evaluators, exhibiting strong indications on our bias benchmark (40% of comparisons made by all models) within each of their evaluations that question their robustness as evaluators. Furthermore, we examine the correlation between human and machine preferences and calculate the average Rank-Biased Overlap (RBO) score to be 44%, indicating that machine preferences are misaligned with humans. According to our findings, LLMs may still be unable to be utilized for automatic annotation aligned with human preferences.",
    tags: ["LLM Eval"],
    links: ["Paper", "PDF"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://aclanthology.org/2024.findings-acl.29/",
      "PDF": "https://aclanthology.org/2024.findings-acl.29.pdf",
    },
    thumbnail: "/papers/cobbler.png",
  },
  {
    id: "human-ai-taxonomy",
    title: "Human-AI Collaborative Taxonomy Construction: A Case Study in Profession-Specific Writing Assistants",
    authors: ["Minhwa Lee", "ZM Kim", "V Khetan", "D Kang"],
    venue: "In2Writing Workshop @ CHI 2024",
    year: 2024,
    description:
      "Large Language Models (LLMs) have assisted humans in several writing tasks, including text revision and story generation. However, their effectiveness in supporting domain-specific writing, particularly in business contexts, is relatively less explored. Our formative study with industry professionals revealed the limitations in current LLMs’ understanding of the nuances in such domain-specific writing. To address this gap, we propose an approach of human-AI collaborative taxonomy development to perform as a guideline for domain-specific writing assistants. This method integrates iterative feedback from domain experts and multiple interactions between these experts and LLMs to refine the taxonomy. Through larger-scale experiments, we aim to validate this methodology and thus improve LLM-powered writing assistance, tailoring it to meet the unique requirements of different stakeholder needs.",
    tags: ["HAI"],
    links: ["Paper"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://dl.acm.org/doi/abs/10.1145/3690712.3690726",
    },
    thumbnail: "/papers/taxo.png",
  },
  {
    id: "localtweets-localhealth",
    title: "LocalTweets to LocalHealth: A Mental Health Surveillance Framework Based on Twitter Data",
    authors: ["V Deshpande", "Minhwa Lee", "Z Yao", "Z Zhang", "JB Gibbons", "H Yu"],
    venue: "COLING-LREC 2024",
    year: 2024,
    description:
      "Prior research on Twitter (now X) data has provided positive evidence of its utility in developing supplementary health surveillance systems. In this study, we present a new framework to surveil public health, focusing on mental health (MH) outcomes. We hypothesize that locally posted tweets are indicative of local MH outcomes and collect tweets posted from 765 neighborhoods (census block groups) in the USA. We pair these tweets from each neighborhood with the corresponding MH outcome reported by the Center for Disease Control (CDC) to create a benchmark dataset, LocalTweets. With LocalTweets, we present the first population-level evaluation task for Twitter-based MH surveillance systems. We then develop an efficient and effective method, LocalHealth, for predicting MH outcomes based on LocalTweets. When used with GPT3.5, LocalHealth achieves the highest F1-score and accuracy of 0.7429 and 79.78%, respectively, a 59% improvement in F1-score over the GPT3.5 in zero-shot setting. We also utilize LocalHealth to extrapolate CDC’s estimates to proxy unreported neighborhoods, achieving an F1-score of 0.7291. Our work suggests that Twitter data can be effectively leveraged to simulate neighborhood-level MH outcomes.",
    tags: ["CE", "LLM Eval"],
    links: ["Paper"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://aclanthology.org/2024.lrec-main.936/",
    },
    thumbnail: "/papers/localtweets.png",
  },
  {
    id: "artifactuality-llm-data",
    title: "Under the Surface: Tracking the Artifactuality of LLM-Generated Data",
    authors: ["D Das*", "K De Langis*", "A Martin*", "J Kim*", "Minhwa Lee*", "ZM Kim*", "SA Hayati", "et al."],
    venue: "arXiv, 2024",
    year: 2024,
    description:
      "This work delves into the expanding role of large language models (LLMs) in generating artificial data. LLMs are increasingly employed to create a variety of outputs, including annotations, preferences, instruction prompts, simulated dialogues, and free text. As these forms of LLM-generated data often intersect in their application, they exert mutual influence on each other and raise significant concerns about the quality and diversity of the artificial data incorporated into training cycles, leading to an artificial data ecosystem. To the best of our knowledge, this is the first study to aggregate various types of LLM-generated text data, from more tightly constrained data like 'task labels' to more lightly constrained 'free-form text'. We then stress test the quality and implications of LLM-generated artificial data, comparing it with human data across various existing benchmarks. Despite artificial data's capability to match human performance, this paper reveals significant hidden disparities, especially in complex tasks where LLMs often miss the nuanced understanding of intrinsic human-generated content. This study critically examines diverse LLM-generated data and emphasizes the need for ethical practices in data creation and when using LLMs. It highlights the LLMs' shortcomings in replicating human traits and behaviors, underscoring the importance of addressing biases and artifacts produced in LLM-generated content for future research and development. All data and code are available on our project page.",
    tags: ["LLM Eval"],
    links: ["arXiv"],
    featuredLink: "arXiv",
    urls: {
      "arXiv": "https://arxiv.org/abs/2401.14698",
    },
    thumbnail: "/papers/artifact.png",
  },
  {
    id: "visual-wsd",
    title: "Vision Meets Definitions: Unsupervised Visual Word Sense Disambiguation Incorporating Gloss Information",
    authors: ["S Kwon", "R Garodia", "Minhwa Lee", "Z Yang", "H Yu"],
    venue: "ACL 2023",
    year: 2023,
    description:
      "Visual Word Sense Disambiguation (VWSD) is a task to find the image that most accurately depicts the correct sense of the target word for the given context. Previously, image-text matching models often suffered from recognizing polysemous words. This paper introduces an unsupervised VWSD approach that uses gloss information of an external lexical knowledge-base, especially the sense definitions. Specifically, we suggest employing Bayesian inference to incorporate the sense definitions when sense information of the answer is not provided. In addition, to ameliorate the out-of-dictionary (OOD) issue, we propose a context-aware definition generation with GPT-3. Experimental results show that the VWSD performance significantly increased with our Bayesian inference-based approach. In addition, our context-aware definition generation achieved prominent performance improvement in OOD examples exhibiting better performance than the existing definition generation method.",
    tags: ["LLM Eval"],
    links: ["Paper", "PDF"],
    featuredLink: "Paper",
    urls: {
      "Paper": "https://aclanthology.org/2023.acl-long.88/",
      "PDF": "https://aclanthology.org/2023.acl-long.88.pdf",
    },
    thumbnail: "/papers/vision.png",
  },
];

export const publicationYears = [
  "All years",
  ...Array.from(new Set(publications.map((paper) => String(paper.year)))).sort((a, b) => Number(b) - Number(a)),
];
