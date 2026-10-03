// ==========================================================================
// Portfolio data — single source of truth for every data-driven section.
// Edit this file to update content without touching markup or logic.
// ==========================================================================

const PORTFOLIO_DATA = {
  person: {
    name: "Tharushni S.V.",
    role: "Information Technology Student · Java & Web Developer",
    intro:
      "A motivated and technically skilled Information Technology student with experience in Java, HTML, CSS, JavaScript, and SQL. Passionate about web development, Java application development, and exploring emerging technologies.",
    email: "tharushnivijayakumartharushniv@gmail.com",
    phone: "+91 73588 22380",
    resumeHref: "assets/resume.pdf",
  },

  socials: [
    { name: "GitHub", href: "https://github.com/Tharushni-18", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/tharushni-s-v-8258ab32a/", icon: "linkedin" },
    { name: "HackerRank", href: "https://www.hackerrank.com/profile/tharushnivijaya2", icon: "hackerrank" },
    { name: "Email", href: "mailto:tharushnivijayakumartharushniv@gmail.com", icon: "mail" },
  ],

  stats: [
    { value: "2023–2027", label: "B.Tech IT" },
    { value: "2", label: "Internships" },
    { value: "2", label: "Featured Projects" },
    { value: "50-Day", label: "Problem Solving Challenge" },
  ],

  about:
    "I'm an Information Technology student who learns by shipping — building full-stack projects, writing Java backends, and picking apart problems on LeetCode. My work spans software development, web development, Java application development, and hands-on project work through internships and hackathons.",

  skills: {
    technical: [
      { name: "Java", icon: "java" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SQL", icon: "sql" },
    ],
    tools: [
      { name: "Visual Studio Code", icon: "vscode" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
    interests: [
      { name: "Web Development", icon: "web" },
      { name: "Java Application Development", icon: "java" },
    ],
  },

  experience: [
    {
      role: "Web Development Intern",
      org: "Prodigy InfoTech",
      period: "Dec 2025 — Jan 2026",
      points: [
        "Worked with HTML and CSS",
        "Improved problem-solving skills",
        "Collaborated on project assignments",
        "Strengthened basic JavaScript skills",
        "Applied modern design principles to create user-friendly layouts",
      ],
    },
    {
      role: "Java Development Intern",
      org: "The Arttifai Tech",
      period: "Jul 2025 — Aug 2025",
      points: [
        "Built Java backend modules",
        "Used OOP, exception handling, and collections",
        "Collaborated on Java-based projects",
        "Fixed bugs and improved code quality",
        "Gained practical Java application development experience",
      ],
    },
  ],

  projects: [
    {
      number: "01",
      path: "/projects/codedoc-ai",
      name: "Code Documentation Generator",
      subtitle: "with QR Code Security and Voice Output",
      description:
        "An automated code documentation system that generates structured documentation from source code and enhances accessibility through QR-code-based secure access and voice output.",
      tags: ["HTML", "CSS", "JavaScript", "QR Code Integration", "Voice Output", "Responsive UI"],
      features: [
        "Code documentation generation",
        "QR-code-based secure access",
        "Voice output",
        "User-friendly interface",
        "Responsive design",
      ],
      github: "https://github.com/Tharushni-18/code-documentation-generator-with-QR-code-security-and-voice-output",
      demo: null,
    },
    {
      number: "02",
      path: "/projects/plagiarism-detector",
      name: "AI-Based Code Plagiarism Detector",
      subtitle: "Java-based project",
      description:
        "A Java-based code plagiarism detection system designed to identify code similarity, detect modified or altered code, and generate originality reports.",
      tags: ["Java"],
      features: [
        "Code similarity detection",
        "Modified-code identification",
        "Originality analysis",
        "Report generation",
      ],
      github: "https://github.com/Tharushni-18/AI-Based-Code-Plagiarism-Detector-Using-Java",
      demo: null,
    },
  ],

  education: [
    {
      degree: "B.Tech Information Technology",
      school: "V.S.B College of Engineering Technical Campus, Coimbatore",
      period: "2023–2027",
      score: "87%",
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Sri Vidhya Nikethan Matric Higher Secondary School, Kangeyam",
      period: "2022–2023",
      score: "83%",
    },
  ],

  certifications: [
    { name: "Java Programming", issuer: "Simplilearn", meta: "Code: 8695307" },
    { name: "HTML5 101", issuer: "Infosys Springboard", meta: "Jan 17, 2026" },
    { name: "Java Programming", issuer: "Arttifai Tech", meta: "Code: ATB1D12C100" },
    { name: "Java Programming", issuer: "HackerRank", meta: "May 26, 2026" },
  ],

  achievements: [
    {
      icon: "trophy",
      title: "50-Day Problem Solving Challenge",
      description:
        "Successfully completed the 50-Day Problem Solving Challenge on LeetCode, demonstrating consistency, logical thinking, and commitment to improving problem-solving skills.",
    },
    {
      icon: "paper",
      title: "Paper Presentation",
      description:
        'Presented a paper on "ChatGPT and Generative AI" and received an award for the presentation.',
    },
    {
      icon: "book",
      title: "Course Completion",
      description:
        "Successfully completed relevant HTML and CSS courses, strengthening fundamental web development skills.",
    },
    {
      icon: "trophy",
      title: "Technoverse Hackathon",
      description:
        "Participated in the Technoverse Hackathon and received certification for participation.",
    },
  ],

  extracurricular: [
    {
      icon: "medal",
      title: "College-Level Kabaddi Tournament",
      description: "Secured 1st Prize in a College-Level Kabaddi Tournament.",
    },
    {
      icon: "medal",
      title: "Inter-College Kabaddi Tournament",
      description:
        "Participated in an Inter-College Kabaddi Tournament, representing the college and gaining competitive sports experience.",
    },
  ],
};
