// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import salesfoce from './assets/tech_logo/sale.png'
import lwc from './assets/tech_logo/lwc.png'
import apex from './assets/tech_logo/apex.png'
import meta from './assets/tech_logo/meta.png'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/com.png';
import agcLogo from './assets/company_logo/su.jpeg';


// Education Section Logo's
import avcoe from './assets/education_logo/av.jpeg';
import pvp from './assets/education_logo/pvpj.jpeg';
import rayat from './assets/education_logo/rayat.jpeg'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import sensai from './assets/work_logo/sensai.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: "LWC", logo:lwc},
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Apex', logo: apex },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {name: 'Salesforce', logo:salesfoce},
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name:"MetaMask", logo:meta}
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Software Developer Intern",
      company: "Comsense Technologies Pvt. Ltd",
      date: "January 2025 - June 2025",
      desc: "Developed an AI-powered chatbot using Salesforce Einstein Bots to assist farmers with smart farming solutions. The chatbot was integrated with custom Salesforce objects to securely manage user registration and data. CRM features were built using Apex and Lightning Web Components (LWC) to enhance functionality and user interaction.",
      skills: [
        "Apex",
        "SOQL",
        "LWC",
        "Salesforce Lightning",
        "HTML",
        "CSS",
        "Einstein Bots",
        "Flow",
        "Java",
        "CRM",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Developer Intern",
      company: "Sumago Infotech Pvt. Ltd",
      date: "December 2023 - February 2024",
      desc: "Developed a full-stack web application that enables students to exchange educational resources within a college environment. Built and tested RESTful APIs using Node.js and Express, and integrated them with a responsive React frontend. Used MongoDB for secure data storage and Postman for API testing to ensure smooth client-server communication.",
      skills: [
        "ReactJS",
        "MongoDB",
        "JavaScript",
        "NodeJS",
        "HTML",
        "CSS",
        "ExpressJS",
        "GitHub",
        "APIs",
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 1,
      img: avcoe,
      school: "Amrutvahini College Of Engineering, Sangamner",
      date: "Nov 2021 - Jun 2025",
      grade: "73.50%",
      desc: "A passionate software engineer currently pursuing a B.E. in Information Technology from Amrutvahini College of Engineering. Specializes in full-stack development using the MERN stack and has hands-on experience with Salesforce technologies like Lightning Web Components (LWC) and Apex. Experienced in building real-world projects such as a College Marketplace platform, Secure Blockchain Payment System, and an AI-powered Smart Farming Assistant. Dedicated to continuous learning and creating impactful software solutions that solve real-world problems.",
      degree: "Bachelor of Engineering in Information Technology",
    },
    {
      id: 2,
      img: pvp,
      school: "P.V.P.Junior College, Loni",
      date: "Aug 2020 - Feb 2021",
      grade: "72.50%",
      desc: "I Completed Higher Secondary Education (HSC) in Computer Science from P.V.P. Junior College, Loni BK, Maharashtra, in 2021. Focused on core science subjects, which helped build a strong foundation in logical thinking, mathematics, and computer fundamentals.",
      degree: "HSC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: rayat,
      school: "Rayat Shikshan Sanstha, Loni",
      date: "Jun 2018 - March 2019",
      grade: "70.80%",
      desc: "I Completed Secondary School Certificate (SSC) in 2019 from SEM English School, Loni BK, Maharashtra, with a focus on Science. Built a solid academic foundation in mathematics, science, and logical reasoning.",
      degree: "SSC(X) - with Science from SEM English School ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Integrating TEE with Blockchain for Secure Offline Transactions",
      description:
        "Designed and developed a secure offline payment system by integrating Trusted Execution Environment (TEE) with blockchain technology. The protocol enables users to perform transactions without continuous internet access, ensuring data integrity and confidentiality. Smart contracts written in Solidity were used to handle transaction logic and identity verification on the Ethereum blockchain. MetaMask was used for wallet simulation and account management, while Python was used to interface with TEE for secure offline transaction handling",
      image: githubdetLogo,
      tags: ["Python", "Solidity", "MetaMask", "Ethereum", "Django","Blockchain","Web3"],
      github: "https://github.com/sairaj321/crypto_project.git",
      webapp: "",
    },
    {
      id: 1,
      title: "College Market Place",
      description:
        "Developed a full-stack web platform to facilitate the exchange of educational resources among college students. The platform enables users to register, upload listings, browse, and request academic materials such as books, notes, and supplies in real-time. Built secure and scalable RESTful APIs using Node.js and Express.js, with MongoDB handling backend data storage. The front-end, built with React.js and HTML, delivers a responsive and intuitive user experience across devices. API calls ensure seamless and secure data operations between client and server, dynamically reflecting user actions on the platform.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","REST APIs"],
      github: "https://github.com/sairaj321",
      webapp: "",
    },

     {
      id: 2,
      title: "SensAI – Your Personal AI Coach for Professional Success",
      description:
        "SensAI is an AI-powered career development platform that helps professionals grow with tools like real-time industry insights, an intelligent resume builder, interview preparation with instant feedback, and an easy cover letter creator. It also offers automated weekly updates via Inngest and secure authentication with Clerk, ensuring a seamless and reliable user experience",
      image: sensai,
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI",'Prisma ORM', "Neon Postgres DB","Clerk","Gemini API","Inngest"],
      github: "https://github.com/sairaj321/career-coach",
      webapp: "https://coachai-five.vercel.app/",
    },
    {
      id: 3,
      title: "Virtual Image Consulting Dressing Room",
      description:
        "Developed an AI-powered virtual dressing room that enables users to try on digital outfits in real time with virtual consultant support. The system captures live video input through a webcam, detects body landmarks using MediaPipe, and maps virtual garments onto a 2D avatar based on camera-based body measurements. This enhances personalization and fitting accuracy, allowing users to better visualize clothing style and size. The backend, built with Django, manages user sessions, garment selection, and interaction flow. This solution significantly improves the online shopping experience while reducing return rates due to sizing or style mismatches.",
      image: movierecLogo,
      tags: ["Python", "OpenCV", "MediaPipe", "Django", "NumPy"],
      github: "https://github.com/sairaj321/Virtual-Image-Consulting-Dressing-Room.git",
      webapp: "",
    },
    {
      id: 4,
      title: "KrushiMitra AI – Smart Farming Assistant",
      description:
        "Built an AI-powered chatbot using Salesforce Einstein Bots to assist farmers with smart farming practices. The chatbot was integrated with custom Salesforce objects to securely manage user registrations and farming-related data. Developed dynamic CRM features using Apex and Lightning Web Components (LWC) to streamline user interactions and automate backend processes. The solution enhances user engagement and promotes digital transformation in agriculture through intelligent automation and data-driven communication.",
      image: npmLogo,
      tags: ["Apex", "SOQL", "Salesforce Lightning","LWC","Validation"," Einstein Bots"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Airline Management System",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "",
      webapp: "",
    },
    
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  