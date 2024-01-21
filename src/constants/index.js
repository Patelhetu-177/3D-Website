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
  emailjs,
  bootstrap,
  express,
  news,
  clock,
  todo,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quick Learner",
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
    name: "email js",
    icon: emailjs,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: mongodb,
    iconBg: "#383E56",
    date: "<<<-------------",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "backend Developer",
    icon: express,
    iconBg: "#E6DEDD",
    date: "------------->>>",
    points: [
      "I am specialize in designing, implementing, and maintaining the server-side logic of web applications, ensuring smooth communication between the frontend and databases while handling business logic and data processing..",
      "Proficient in server-side programming languages such as Python and Node.js, I create scalable and secure APIs, manage databases, and optimize server performance to enhance the overall functionality and responsiveness of web applications..",
    ],
  },
  {
    title: "Web Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "<<<-------------",
    points: [
      "I am specialize in designing and building websites, using a combination of HTML, CSS, and JavaScript to create interactive and visually appealing user interfaces.",
      "Proficient in both frontend and backend technologies, i am currently work on client-side scripting, server-side scripting, and database management to ensure the seamless functioning of web applications.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "------------->>>",
    points: [
      "I am skilled in database management, handling server infrastructure, and implementing client-side interactions, allowing myself to architect and maintain entire web applications independently or as part of a collaborative team.",
      "me as fullstack developer bring a holistic approach to projects, combining the skills of frontend and backend specialists, and i am capable of understanding and contributing to the entire web development life cycle.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Elon Musk's perspective on technology can be summarized as harnessing innovation to push the boundaries of what's possible and drive humanity toward a more sustainable and interconnected future..",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla, spacex",
  
  },
  {
    testimonial:
      
    "Mark Zuckerberg's perspective on technology can be encapsulated as utilizing connectivity and social platforms to bring people together and create a more open and connected world.",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "meta",
   
  },
  {
    testimonial:
    "Bill Gates' perspective on technology is centered around the idea of using innovation to empower individuals and improve lives, with a focus on addressing global challenges .",
    name: "Bill gates",
    designation: "CEO",
    company: "Apple",
    
  },
];

const projects = [
  {
    name: "News-App",
    description:
      "Create a personalized news app for a Implement real-time updates and a clean, intuitive interface for effortless news consumption.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Patelhetu-177/News-App",
  },
  {
    name: "Todo-List",
    description:
      "Web application that enables users to manages the daily todos, Develop and implement a task prioritization feature to enhance productivity.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Patelhetu-177/todo-list",
  },
  {
    name: "Alarm-Clock",
    description:
      "Design a user-friendly alarm clock app with customizable features for snooze intervals. Incorporate a visually appealing interface with a simple set-and-forget functionality.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",

      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: clock,
    source_code_link: "https://github.com/Patelhetu-177/Alarm-Clock",
  },
];

export { services, technologies, experiences, testimonials, projects };