import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  deny,
  css,
  reactjs,
  redux,
  data,
  research,
  tailwind,
  git,
  figma,
  spotiviral,
  smartdairy,
  themeforest,
  github,
  creator,
  nodejs,
  mongodb,
  docker,
  python,
} from "../assets/index";

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
    id: "tech",
    title: "Tech",
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
    title: "React Js Developer",
    icon: backend,
  },
  {
    title: "Figma Designing",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
  {
    title: "Data Scientist",
    icon: data,
  },
  {
    title: "Researcher",
    icon: research,
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
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "HTML5 Developer",
    company_name: "Self Learning",
    icon: html,
    iconBg: "#E34F26",
    points: [
      "Started with HTML5: Gained a solid foundation in structuring web content.",
      "Learned semantic elements, forms, and layout techniques for modern web pages."
    ],
  },
  {
    title: "CSS3 Developer",
    company_name: "Self Learning",
    icon: css,
    iconBg: "#1572B6",
    points: [
      "Mastered CSS3: Focused on styling techniques, responsive design, and layouts.",
      "Worked with Flexbox, Grid, and animations to create visually appealing web pages."
    ],
  },
  {
    title: "JavaScript and ES6 Developer",
    company_name: "Self Learning",
    icon: javascript,
    iconBg: "#F7DF1E",
    points: [
      "Learned JavaScript: Covered core concepts like variables, loops, and functions.",
      "Explored ES6 features: Mastered modern JavaScript syntax, including arrow functions, promises, and async/await."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Self Learning",
    icon: reactjs,
    iconBg: "#61DAFB",
    points: [
      "Developed skills in React.js: Built dynamic user interfaces with components.",
      "Gained proficiency in React-Redux, Hooks, and React Navigation for state management."
    ],
  },
  {
    title: "Tailwind CSS Developer",
    company_name: "Self Learning",
    icon: tailwind,
    iconBg: "#38BDF8",
    points: [
      "Learned Tailwind CSS: Implemented utility-first CSS framework for rapid UI development.",
      "Mastered responsive design and customization of styles using Tailwind’s utility classes."
    ],
  },
  {
    title: "Node.js and Express.js Developer",
    company_name: "Self Learning",
    icon:nodejs,
    iconBg: "#339933",
    points: [
      "Learned Node.js: Created backend services and APIs using JavaScript.",
      "Mastered Express.js: Built scalable server-side applications and handled routing, middleware, and HTTP requests."
    ],
  },
  {
    title: "MongoDB Developer",
    company_name: "Self Learning",
    icon: mongodb,
    iconBg: "#47A248",
    points: [
      "Gained proficiency in MongoDB: Learned NoSQL database concepts and how to store and retrieve data efficiently.",
      "Worked with MongoDB Atlas and local installations to manage and query data."
    ],
  },
  {
    title: "Docker",
    company_name: "Self Learning",
    icon: docker,
    iconBg: "#2496ED",
    points: [
      "Learned Docker: Built containerized applications and managed containers using Docker.",
      "Explored Docker Compose and worked with multiple services in isolated environments."
    ],
  },
  {
    title: "Python Developer",
    company_name: "Self Learning",
    icon: python,
    iconBg: "#3776AB",
    points: [
      "Transitioned to Python: Developed a strong understanding of Python syntax and libraries.",
      "Applied Python for both automation and data science tasks."
    ],
  },
  {
    title: "Machine Learning and Automated Machine Learning Developer",
    company_name: "Self Learning",
    icon: data,
    iconBg: "#FF6F00",
    points: [
      "Explored Machine Learning: Implemented algorithms for data analysis and predictive modeling.",
      "Dived into Automated Machine Learning (AutoML): Streamlined the ML model-building process and automated hyperparameter tuning."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Seller is working hard and professional. I would recommend. Thanks!",
    name: "fiveforyou222",
    designation: "Buyer",
    company: "on Fiver",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "PGOT WEBSITE",
    description:
      "A platform for automating cryptocurrency trading on Binance (spot and futures), offering real-time data, technical analysis, and the Fear and Greed Index to optimize strategies.",
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
      {
        name: "Nodejs & Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "Nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "Pinescript V4/v5",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
    ],
    image: spotiviral,
    source_code_link: "https://github.com/Malik-AhmadSE",
  },
  {
    name: "CitizenBlades",
    description:
      "Website for Demoscus product. You can Buy Demoscus products, see products and different angles of the products and zoom-In them.Moreover stripe payment gateway Integration.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwidCss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      }
    ],
    image: smartdairy,
    source_code_link: "https://github.com/Malik-AhmadSE",
  },
  {
    name: "PGOT PREDICTOR ",
    description:
      "PGOT Predictor predicts the next price of BTC/USDT on 1 Minute, 3 Minute, 5 Minute, 15 Minute. it is a part of Research done in university of camrino italy. ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "python/flask",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Automated Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: themeforest,
    source_code_link: "https://github.com/Malik-AhmadSE",
  },
  {
    name: "DentyTech Clone",
    description:
      "A company DentyTech.i learn this from youtube and for practical work clone the offical website for Learning basics of web development. (Youtube self-Learning)",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: deny,
    source_code_link:
      "https://github.com/Malik-AhmadSE",
  },
];

export { services, technologies, experiences, testimonials, projects };
