import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data scientist",
    icon: mobile,
  },
  {
    title: "Business And Data Analyst",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data scientist",
    company_name: "Ybi foundation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - December 2024",
    points: [
      "Applied machine learning algorithms to solve real-world problems, driving actionable insights and improvements.",
      "Conducted in-depth exploratory data analysis (EDA), preparing and processing data for model building.",
      "Built, trained, and optimized machine learning models, improving prediction accuracy and overall performance.",
      "Developed interactive data visualizations to present insights and support data-driven decision-making.",
      "Collaborated with cross-functional teams to identify business needs and deliver innovative solutions.",
    ],
  },
  {
    title: "Python Engineer Intern",
    company_name: "TechnoHacks EduTech Official",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2024 -  Aug 2024",
    points: [
      "Developed Python-based applications and scripts to automate tasks and improve efficiency.",
      "Implemented data structures and algorithms to optimize code performance.",
      "Wrote clean, well-structured, and maintainable Python code adhering to best practices.",
      "Collaborated with team members to design, develop, and test Python applications.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "As a freelance Python Developer, Data Analyst, and Data Scientist, I bring a comprehensive approach to data-driven problem-solving for a wide range of clients. My expertise spans Python programming, advanced data analysis, and predictive modeling, allowing me to extract valuable insights and drive impactful decisions. Skilled in Tableau and Power BI, I design interactive, visually compelling dashboards that transform complex data into clear, actionable information. Additionally, I leverage advanced Excel techniques to streamline data processes and enhance reporting capabilities. My work focuses on understanding each client's unique needs to deliver tailored solutions that support strategic goals and continuous growth.",
     
    ],
  },
  {
    title: "Ai Engineer Intern",
    company_name: "Yhills",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Collaborating on innovative AI and machine learning projects, utilizing Python for data analysis, modeling, and deployment.",
      "Developing predictive models and optimizing machine learning algorithms for real-world applications.",
      "Enhancing skills in AI/ML frameworks, including TensorFlow, PyTorch, and Scikit-learn.",
      "Conducting data preprocessing, feature engineering, and performance evaluation to ensure high model accuracy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Google Analytics Certified",
    name: "Google Analytics",
    Issuer: "Google",
    Certification: "91824981",
    image: "https://raw.githubusercontent.com/Sujaltalreja04/Terminal-Chatbot-react-app/refs/heads/main/download%20(8).png",
  },
  {
    testimonial:
      "Google Analtics IQ Certified",
    name: "Google analytics iq",
    
    Id : "34049029",
    image: "https://raw.githubusercontent.com/Sujaltalreja04/Terminal-Chatbot-react-app/refs/heads/main/download%20(9).png",
  },
  {
    testimonial:
      "Accenture Web Analyst",
    name: "Accenture",
    designation: "Web Analyst Certified",
    company: "",
    image: "https://raw.githubusercontent.com/Sujaltalreja04/Terminal-Chatbot-react-app/refs/heads/main/download%20(2).jpeg",
  },
];

const projects = [
  {
    name: "Image Generator",
    description:
      "Web-based platform that allows users to generate custom images using  on any type of prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/webcoder904/Ai-image-generator-web-app",
  },
  {
    name: "Virtual Mouse",
    description:
      "Python based dekstop application which can let you control your device with hand gestures without mouse using opencv.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sujaltalreja04/Virtual-mouse",
  },
  {
    name: "",
    description:
      "A Python based dekstop application which can give you any information make through gui and other python library;",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Gui",
        color: "green-text-gradient",
      },
      {
        name: "Applicaton",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sujaltalreja04/web-browser",
  },
];

export { services, technologies, experiences, testimonials, projects };
