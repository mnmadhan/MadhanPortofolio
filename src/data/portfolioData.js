export const NAV_LINKS = ["About","Skills","Experience","Projects","Certifications","Contact"];

export const SKILLS = {
  Languages:  ["Java","JavaScript","Python"],
  Frontend:   ["React.js","HTML5","CSS3"],
  Backend:    ["Node.js","Spring Boot","REST APIs","Express.js"],
  DevOps:     ["Docker","GitHub Actions","CI/CD","Linux","AWS"],
  Databases:  ["MySQL","MongoDB","PostgreSQL"],
  Tools:      ["Git","Postman","Maven","Agile"],
};

export const STATS = [
  { value:"2+", label:"Years Coding" },
  { value:"3",  label:"Projects Shipped" },
  { value:"2",  label:"Internships" },
  { value:"7.21",label:"CGPA" },
];

export const EXPERIENCES = [
  {
    role:"MERN Stack Developer Intern",
    company:"Gradious Technologies",
    location:"Hyderabad, IN",
    period:"Feb 2026 – May 2026",
    color:"#C9A84C",
    points:[
      "Built full-stack web apps using React.js, Node.js, MySQL & MongoDB.",
      "Designed & documented RESTful APIs reducing response latency and improving reliability.",
      "Shipped features, resolved bugs and maintained clean code documentation.",
    ],
  },
  {
    role:"Full Stack Developer Intern",
    company:"Xortican Technologies",
    location:"Coimbatore, IN",
    period:"Jun 2024 – Aug 2024",
    color:"#A8A49E",
    points:[
      "Developed scalable backend APIs using Node.js with MySQL.",
      "Collaborated in Agile sprints for seamless frontend–backend integration.",
      "Documented API contracts and maintained module-level documentation.",
    ],
  },
];

export const PROJECTS = [
  {
    title:"PDF-to-Quiz AI Generator",
    tech:["Java","Spring Boot","React.js","PostgreSQL","OpenAI API","Apache PDFBox"],
    desc:"Converts 50+ page PDFs into interactive MCQ quizzes with answers and explanations in under 10 seconds.",
    problem:"Students wasted hours manually creating quiz questions from study material.",
    impact:"10s generation time · Handles 50+ page documents · REST API design",
    architecture:"Spring Boot REST API → OpenAI GPT → PostgreSQL · React.js SPA frontend",
    github:"https://github.com/mnmadhan",
    accent:"#C9A84C",
    icon:"🤖",
  },
  {
    title:"UPI Money Bank",
    tech:["React.js","Node.js","MySQL","JWT","Express.js"],
    desc:"Full-stack UPI-based banking app with JWT auth, payment modules, and transaction history.",
    problem:"Needed a learning project demonstrating end-to-end fintech flow with real auth.",
    impact:"JWT auth flow · MySQL transactions · Role-based access",
    architecture:"React SPA → Express REST API → MySQL · JWT stateless auth",
    github:"https://github.com/mnmadhan",
    accent:"#10B981",
    icon:"💳",
  },
  {
    title:"Asset Inventory & Tracking",
    tech:["React.js","Node.js","MySQL","RBAC"],
    desc:"Asset management system with role-based access control, secure auth, and real-time tracking.",
    problem:"Manual spreadsheet-based tracking caused data inconsistencies in inventory.",
    impact:"RBAC implementation · Real-time tracking · Audit trail",
    architecture:"React SPA → Node/Express API → MySQL · RBAC middleware layer",
    github:"https://github.com/mnmadhan",
    accent:"#A78BFA",
    icon:"📦",
  },
];

export const CERTIFICATIONS = [
  { name:"AWS Cloud Practitioner Essentials", issuer:"AWS Skill Builder",    img:"/images/certificate1.png", icon:"☁️" },
  { name:"GitHub Actions",                    issuer:"GitHub Skills",         img:"/images/certificate2.png", icon:"⚙️" },
  { name:"Linux Unhatched",                   issuer:"Cisco NetAcad",         img:"/images/certificate3.png", icon:"🐧" },
  { name:"Docker Foundations",                issuer:"Docker Inc.",           img:"/images/certificate4.png", icon:"🐳" },
  { name:"Google Cloud Foundations",          issuer:"GCP Skills Boost",      img:"/images/certificate5.png", icon:"🌐" },
  { name:"React JS",                          issuer:"Udemy",                 img:"/images/certificate6.png", icon:"⚛️" },
  { name:"Java Programming (OOPs)",           issuer:"Great Learning",        img:null,                       icon:"☕" },
  { name:"RPA Developer Certification",       issuer:"UiPath",               img:null,                       icon:"🤖" },
];

export const CONTACT = {
  email:    "rmadhanraj540@gmail.com",
  phone:    "+91 9976543924",
  linkedin: "https://linkedin.com/in/madhan-raj-r-6402a72ba",
  github:   "https://github.com/mnmadhan",
  location: "Hyderabad, Telangana",
};

// EmailJS — keys loaded from .env (never commit real keys to git)
export const EMAILJS = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY",
};
