export const NAV_LINKS = ["About","Skills","Experience","Projects","Certifications","Contact"];

export const SKILLS = {
  Languages:  ["Java","JavaScript","Python"],
  Frontend:   ["React.js","HTML5","CSS3"],
  Backend:    ["Node.js","Spring Boot","REST APIs","Express.js"],
  DevOps:     ["Docker","GitHub Actions","CI/CD","Linux","AWS"],
  Databases:  ["MySQL","MongoDB","PostgreSQL"],
  Tools:      ["Git","Postman","Maven","Agile"],
};

export const EXPERIENCES = [
  {
    role:"MERN Stack Developer Intern",
    company:"Gradious Technologies",
    location:"Hyderabad, IN",
    period:"Feb 2026 – May 2026",
    points:[
      "Built and shipped features in a React + Node/MySQL/MongoDB app used by an internal team.",
      "Designed a few REST endpoints from scratch and documented them so the next intern wasn't guessing.",
      "Spent a fair amount of time just reading other people's code before I was any good at writing mine.",
    ],
  },
  {
    role:"Full Stack Developer Intern",
    company:"Xortican Technologies",
    location:"Coimbatore, IN",
    period:"Jun 2024 – Aug 2024",
    points:[
      "Wrote backend APIs in Node.js against a MySQL database.",
      "First real exposure to Agile — stand-ups, sprint boards, the works.",
      "Learned the hard way why API docs matter once someone else has to use your endpoint.",
    ],
  },
];

export const PROJECTS = [
  {
    title:"PDF-to-Quiz Generator",
    tech:["Java","Spring Boot","React.js","PostgreSQL","OpenAI API","Apache PDFBox"],
    status:"Shipped · solo project",
    desc:"Upload a PDF, get a multiple-choice quiz back — questions, answers, and explanations, in under 10 seconds.",
    problem:"I was making my own revision quizzes by hand before exams and it was eating hours I didn't have.",
    build:"Spring Boot API handles the request, Apache PDFBox pulls the text out of the PDF, that text gets passed to the OpenAI API to generate questions, and everything's saved to PostgreSQL. React front end for the upload and quiz screens.",
    result:"Works reliably on documents 50+ pages long, and the whole round trip is under 10 seconds.",
    github:"https://github.com/mnmadhan",
  },
  {
    title:"UPI Money Bank",
    tech:["React.js","Node.js","MySQL","JWT","Express.js"],
    status:"Learning project",
    desc:"A banking app that mimics UPI-style payments — accounts, transfers, transaction history, real auth.",
    problem:"I wanted to actually understand how auth and money movement work end to end, not just know the buzzwords.",
    build:"Express REST API in front of MySQL, JWT for stateless auth, React SPA on top. Transfers are wrapped in transactions so a failure halfway through doesn't leave accounts out of sync.",
    result:"A full auth flow I built and can explain line by line, plus a decent excuse to finally learn how bank ledgers actually work.",
    github:"https://github.com/mnmadhan",
  },
  {
    title:"Asset Inventory & Tracking",
    tech:["React.js","Node.js","MySQL","RBAC"],
    status:"Shipped · team project",
    desc:"Role-based inventory system to replace a spreadsheet that kept going out of sync.",
    problem:"Manual spreadsheet tracking meant two people could update the same asset and nobody would notice.",
    build:"Node/Express API with an RBAC middleware layer so admins, managers, and viewers see different things. MySQL underneath, with an audit trail logging who changed what and when.",
    result:"No more duplicate edits, and an actual paper trail when something goes missing.",
    github:"https://github.com/mnmadhan",
  },
];

export const CERTIFICATIONS = [
  { name:"AWS Cloud Practitioner Essentials", issuer:"AWS Skill Builder", img:"/images/certificate1.png" },
  { name:"GitHub Actions",                    issuer:"GitHub Skills",    img:"/images/certificate2.png" },
  { name:"Linux Unhatched",                   issuer:"Cisco NetAcad",    img:"/images/certificate3.png" },
  { name:"Docker Foundations",                issuer:"Docker Inc.",      img:"/images/certificate4.png" },
  { name:"Google Cloud Foundations",          issuer:"GCP Skills Boost", img:"/images/certificate5.png" },
  { name:"React JS",                          issuer:"Udemy",            img:"/images/certificate6.png" },
  { name:"Java Programming (OOPs)",           issuer:"Great Learning",   img:null },
  { name:"RPA Developer Certification",       issuer:"UiPath",           img:null },
];

export const CONTACT = {
  email:    "rmadhanraj540@gmail.com",
  phone:    "+91 9976543924",
  linkedin: "https://linkedin.com/in/madhan-raj-r-6402a72ba",
  github:   "https://github.com/mnmadhan",
  location: "Bengaluru, India",
};

// EmailJS — keys loaded from .env (never commit real keys to git)
export const EMAILJS = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY",
};
