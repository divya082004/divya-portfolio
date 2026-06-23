import { Project, Experience, Education, SkillGroup, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "Divya S",
  title: "UX/UI Designer & Developer",
  email: "divyashankar004@gmail.com",
  phone: "+91 9980186220",
  location: "Bengaluru, Karnataka",
  linkedin: "https://linkedin.com/in/divya-s-9b1070338",
  linkedinLabel: "linkedin.com/in/divya-s-9b1070338",
  aboutMe: "Creative and detail-oriented Computer Science and Design graduate with a strong interest in UI/UX Design and mobile application development. Skilled in designing user-centered digital experiences through wireframing, prototyping, and user research. Passionate about creating intuitive, accessible, and visually appealing interfaces while continuously learning new design technologies and industry best practices to bridge the gap between design and high-quality code."
};

export const PROJECTS: Project[] = [
  {
    id: "kavya-kanaja",
    title: "Kavya Kanaja",
    subtitle: "Kannada Poetry Mobile Application",
    role: "UI/UX Designer & Android Developer",
    tools: ["Figma", "Kotlin", "Jetpack Compose", "Material 3"],
    description: "Designed and developed a beautiful native Android mobile application promoting Kannada poetry, audio literature and regional cultural legacy.",
    points: [
      "Created intuitive screens including Home, Library, Favorites, Profile, and Settings following Material 3.",
      "Implemented 'Poem of the Day' carousel, native audio playing utility, and image sharing cards.",
      "Tested and refined UI navigation resulting in high engagement from local language poetry lovers.",
      "Achieved responsive styling matching diverse smartphone aspect ratios in Jetpack Compose."
    ],
    mockupType: "mobile",
    colorTheme: "amber",
    accentClass: "text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100",
    bgGradClass: "from-amber-50 to-orange-50",
    process: [
      {
        title: "1. Discover & Research",
        description: "Studied existing regional apps and found they lacked modern typography and readable visual hierarchies. Conducted interviews with poets and students to define layout requirements.",
        artifacts: ["User Personas", "Contrast Requirements", "Visual Moodboard"]
      },
      {
        title: "2. Wireframe & Taskflow",
        description: "Created high-level user navigation paths for locating daily poems, sharing customized text blocks as images, and streaming audio recitations without leaving the catalog view.",
        artifacts: ["Information Architecture", "Audio Player State Diagram", "Low-Fidelity Sketches"]
      },
      {
        title: "3. UI & Visual Identity",
        description: "Crafted elegant visual assets combining modern typography with comforting regional warm tones. Adopted dynamic color guidelines from Google's Material Design 3 guidelines.",
        artifacts: ["Figma Typography Scale", "Material 3 Palette", "Custom Poetry Cards Designer"]
      },
      {
        title: "4. Development & Build",
        description: "Coded the application from scratch using Kotlin and Jetpack Compose. Configured background audio services and standard local database storage for bookmarking capabilities.",
        artifacts: ["Jetpack Compose Layouts", "Local SQLite Persistence", "Firebase Auth Integration"]
      }
    ]
  },
  {
    id: "doctor-appointment",
    title: "Online Doctor Appointment App",
    subtitle: "Seamless Medical Booking Framework",
    role: "UI/UX Designer",
    tools: ["Figma", "User Flow Mapping", "Interactive Prototyping"],
    description: "Designed a clean, highly accessible, and reassuring healthcare mobile app to streamline appointment scheduling, medical file storage, and doctor consultations.",
    points: [
      "Conducted extensive user research to solve booking anxiety and patient onboarding frictions.",
      "Produced comprehensive wireframes, interactive user flows, and realistic clickable high-fidelity prototypes.",
      "Engineered clean modern doctor card interfaces displaying reviews, specialties, and open calendar spots.",
      "Built structured accessibility-vetted grids conforming strictly to deep WCAG AA contrasts."
    ],
    mockupType: "mobile",
    colorTheme: "teal",
    accentClass: "text-teal-700 bg-teal-50 border-teal-200 hover:bg-teal-100",
    bgGradClass: "from-teal-50 to-emerald-50",
    process: [
      {
        title: "1. Problem Discovery",
        description: "Friction in online booking screens often leads to elderly or stressed patients abandoning the flow. Focused the wireframe design on clear 1-click calendar selectors and accessible text sizes.",
        artifacts: ["User Journey Mapping", "Booking Drop-off Analysis", "Touch Target Audit"]
      },
      {
        title: "2. Visual Layouts",
        description: "Established a calming system based on soft whites, reassuring teal green accents, and generous vertical spacing. Included status indicators and tooltip icons for crucial steps.",
        artifacts: ["Calming Design Specs", "Vetted Teal Theme Colors", "Dynamic Schedule Calendar Grid"]
      },
      {
        title: "3. High-Fidelity Prototype",
        description: "Wired up realistic transaction state-switches in Figma. Users can filter by reviews, select custom slot timings, and receive detailed success summary frames with dynamic bar codes.",
        artifacts: ["Interactive Doctor Reviews Filter", "Appointment State Dialog", "Complete Screen Flow Map"]
      }
    ]
  },
  {
    id: "readsphere",
    title: "ReadSphere",
    subtitle: "Online Reading & Discovery Platform",
    role: "UI/UX Designer & Front-End Developer",
    tools: ["Figma", "React", "Tailwind CSS", "Responsive Grid Layouts"],
    description: "Designed and coded a fully responsive web application serving as a modern digital library and detailed reading log manager.",
    points: [
      "Designed grid-based dashboards detailing real-time reading progress, saved book lists, and library catalogs.",
      "Crafted flexible grid patterns offering reading layouts across mobile, tablets, and wide monitors.",
      "Optimized text sizing controls, fluid sepia/dark display modes, and side-navigation modules inside a robust interactive dashboard.",
      "Collaborated on seamless, smooth interface elements that boost web page responsiveness."
    ],
    mockupType: "desktop",
    colorTheme: "indigo",
    accentClass: "text-indigo-700 bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
    bgGradClass: "from-indigo-50 to-blue-50",
    process: [
      {
        title: "1. Conception",
        description: "Drafted goals for a minimal reading view that isolates book contents from noisy notification bars. Envisioned a centered reading deck flanked by collapsible note-taking and index panels.",
        artifacts: ["Focused Layout Sketches", "Flexible Columns Wireframe"]
      },
      {
        title: "2. Interface Design",
        description: "Selected deep slate colors paired with a warm book-like cream theme. Created custom reading interfaces with font-size adjusters, progress tracking rings, and bookmarks.",
        artifacts: ["Dark, Warm and Sepia Variations", "Typography Contrast Inspections"]
      },
      {
        title: "3. Responsive Coding",
        description: "Transposed Figma components into semantically clean React components. Structured styling layout using Tailwind CSS for robust adaptability across mobile, tablet, and wide screens.",
        artifacts: ["React Components", "Responsive Tailwind Layouts", "Progress Ring Calculations"]
      }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Android App Development Intern (Using Generative AI)",
    company: "Mind Matrix (CL Infotech Pvt. Ltd.)",
    location: "Bengaluru, KA",
    period: "Recent Internship",
    points: [
      "Developed native Android applications using modern Kotlin syntax and declarative Jetpack Compose.",
      "Designed and refined user-centered mobile interfaces applying Material Design principles and typography systems.",
      "Interacted with Firebase Authentication services and Firebase Realtime Database systems to support real-time user interactions.",
      "Leveraged Google AI Studio and Generative AI prompt parameters to create and debug dynamic application features.",
      "Collaborated on small-team agile sprints, participating actively in layout brainstorming, asset generation, and design reviews."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering (B.E.) – Computer Science and Design",
    institution: "BGS College of Engineering and Technology",
    period: "2023 – 2026",
    gpa: "8.04 CGPA",
    achievements: [
      "Dual focus on Computing Foundations and Design Methodologies",
      "Specialization in UI/UX systems drafting, user research, data structures, and app software principles"
    ]
  },
  {
    degree: "Diploma – Computer Science and Engineering",
    institution: "East West Polytechnic",
    period: "2020 – 2023",
    gpa: "8.08 CGPA",
    achievements: [
      "Foundational systems engineering, databases, responsive layout, CSS, and interactive design labs"
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "UI/UX Design",
    skills: ["User Research", "Wireframing", "High-Fidelity Prototyping", "User Flow Mapping", "Responsive Web Design", "Design Thinking & Auditing"]
  },
  {
    category: "Tools & Software",
    skills: ["Figma", "Canva", "Android Studio", "VS Code", "Material 3 Theme Designer"]
  },
  {
    category: "Programming & Dev",
    skills: ["Kotlin", "Python", "Jetpack Compose", "Firebase Auth / Realtime DB"]
  },
  {
    category: "Soft Skills",
    skills: ["Productive Communication", "Structured Problem Solving", "Team Collaboration", "Empathetic Design", "Attention to Detail", "Time Management"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Android App Development using Generative AI",
    issuer: "Mind Matrix"
  },
  {
    name: "UI/UX Design Specialist",
    issuer: "Figma Academy / Self-Paced"
  },
  {
    name: "Data Science Fundamentals",
    issuer: "Cognitive Class / IBM Partner"
  }
];

export const LANGUAGES = ["English (Professional)", "Kannada (Native/Bilingual)"];
