export const profile = {
  name: "Yash Bisen",
  role: "React Native & Android Engineer",
  tagline:
    "Architecting high-performance mobile ecosystems — bridging native precision with cross-platform velocity.",
  email: "yashbisen0803@gmail.com",
  phone: "+91 8718898787",
  linkedin: "https://linkedin.com/in/yash-bisen-820b2420a",
  github: "https://github.com/Yash-Bisen",
  location: "India",
};

export const about = [
  {
    title: "Mobile Developer",
    desc: "Building production-grade React Native & native Android apps shipped to millions of users on Play Store & App Store.",
    code: "MOD.01",
  },
  {
    title: "Backend Integrator",
    desc: "REST APIs, Firebase, real-time chat, push notifications and analytics pipelines — wired end-to-end.",
    code: "MOD.02",
  },
  {
    title: "Performance Engineer",
    desc: "MVVM architecture, Kotlin Coroutines, RoomDB caching, Redux state — optimized for low latency and battery.",
    code: "MOD.03",
  },
];

export const skills = [
  { title: "React Native", level: 90, group: "Mobile" },
  { title: "Kotlin / Android", level: 60, group: "Mobile" },
  { title: "JavaScript / TS", level: 92, group: "Language" },
  { title: "Java", level: 80, group: "Language" },
  { title: "Firebase", level: 85, group: "Backend" },
  { title: "REST APIs", level: 95, group: "Backend" },
  { title: "Node.js", level: 65, group: "Backend" },
  { title: "MongoDB", level: 70, group: "Backend" },
  { title: "Redux", level: 85, group: "State" },
  { title: "MVVM / Hilt", level: 60, group: "Architecture" },
  // { title: "Retrofit", level: 88, group: "Architecture" },
  // { title: "RoomDB", level: 82, group: "Architecture" },
  // { title: "Coroutines", level: 85, group: "Architecture" },
  { title: "Push Notifications", level: 90, group: "Integration" },
  { title: "Google AdMob", level: 85, group: "Integration" },
];

export const experience = [
  {
    role: "React Native Developer",
    org: "IdealIt Techno Pvt Ltd",
    period: "Apr 2024 — Present",
    code: "ROLE.02",
    bullets: [
      "Developed live sports score applications with real-time updates",
      "Built on-demand service apps with chat, maps and booking features",
      "Integrated Firebase auth, chat & analytics across multiple products",
      "Implemented monetization with Google AdMob and Facebook Analytics",
    ],
    stack: ["React Native", "Firebase", "AdMob", "Push Notifications"],
  },
  {
    role: "Android Developer",
    org: "IdealIt Techno Pvt Ltd",
    period: "Apr 2024 — Feb 2025",
    code: "ROLE.01",
    bullets: [
      "Developed and maintained the contractor-side on-demand service app",
      "Implemented scalable MVVM architecture with clean code practices",
      "Integrated REST APIs via Retrofit; local caching with RoomDB",
      "Drove UI/UX improvements and performance optimization",
    ],
    stack: ["Kotlin", "MVVM", "Hilt", "Retrofit", "RoomDB", "Coroutines"],
  },
];

export const award = {
  title: "Code Commander of the Year",
  org: "IdealIt Techno Pvt Ltd",
  date: "June 2025",
  desc: "Recognized for outstanding engineering leadership, code quality and impact across multiple shipped mobile products.",
};

export type Project = {
  title: string;
  description: string;
  skills: string[];
  playStore?: string;
  appStore?: string;
  website?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "LiveScore by Kickscore",
    description:
      "Live sports score & entertainment platform for football, cricket, tennis and basketball — real-time updates, chat and analytics.",
    skills: ["React Native (Expo)", "Firebase Chat", "AdMob", "Push Notifications"],
    appStore: "https://apps.apple.com/in/app/livescore-by-kickscore/id6754694311",
    website: "https://kickscore.ng/",
    accent: "FB.SPORT",
  },
  {
    title: "MyFairly",
    description:
      "On-demand service app for booking home services — beauty, wellness and maintenance — with real-time chat and live location.",
    skills: ["React Native CLI", "Firebase Auth", "Chat", "Maps"],
    appStore: "https://apps.apple.com/sg/app/my-fairly/id6747285778",
    accent: "ON.DEMAND",
  },
  {
    title: "TaskEasy Contractor",
    description:
      "Contractor-side native Android app for on-demand services — lawn mowing, gardening, AC cleaning and more.",
    skills: ["Kotlin", "XML", "MVVM", "Retrofit", "RoomDB"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.taskeasy.mobile.beta",
    accent: "FIELD.OPS",
  },
  {
    title: "IQONS",
    description:
      "Live football score & entertainment app delivering real-time match updates with an engaging interface.",
    skills: ["React Native", "Firebase", "API Integration"],
    playStore: "https://play.google.com/store/apps/details?id=com.iqons.app",
    accent: "FB.LIVE",
  },
];

export const education = [
  {
    school: "Acropolis Institute of Technology and Research",
    degree: "B.Tech, Information Technology",
    date: "Jul 2020 — Jun 2024",
    grade: "7.95 CGPA",
    location: "Indore",
  },
  {
    school: "Shri Dadabadi Jain Higher Secondary School",
    degree: "MPBSE (XII), PCM with Maths",
    date: "Jul 2019 — Jun 2020",
    grade: "75%",
    location: "Balaghat",
  },
  {
    school: "Shri Dadabadi Jain Higher Secondary School",
    degree: "MPBSE (X), Science",
    date: "Jul 2017 — Jun 2018",
    grade: "87.8%",
    location: "Balaghat",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Award", href: "#award" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
