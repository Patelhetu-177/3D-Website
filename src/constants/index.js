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
  namaste,
  musicera,
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
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
    title: "Web Developer",
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
    title: "MERN Stack Developer",
    icon: express,
    iconBg: "#E6DEDD",
    date: "------------->>>",
    points: [
      "As a MERN Stack Developer, I am proficient in crafting dynamic and scalable web applications from inception to deployment. My expertise lies in seamlessly integrating MongoDB, Express.js, React, and Node.js to deliver exceptional user experiences.",
      "Leveraging the power of JavaScript across the entire stack, I deliver efficient, scalable, and maintainable web applications. My passion for cutting-edge technologies and problem-solving drives me to create innovative solutions that exceed expectations."
    ],
  },
  {
    title: "Competitive Programmer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "<<<-------------",
    points: [
      "I am a competitive programmer with a passion for solving complex algorithmic problems. My expertise lies in designing efficient algorithms, implementing optimal data structures, and writing clean, high-performance code.",
      "I thrive on the adrenaline rush of coding under pressure, constantly pushing the boundaries of my problem-solving skills. With a deep understanding of mathematical concepts and a knack for logical reasoning, I excel in tackling a wide range of challenges."
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
    name: "Namaste",
    description:
      "Namaste is a transformative chat app designed to cultivate peace and connection in your digital world. Built with the powerful MERN stack.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: namaste,
    source_code_link: "https://github.com/Patelhetu-177/Namaste",
  },
  {
    name: "MusicEra",
    description:
      "I'm excited to introduce MusicEra, a cutting-edge frontend website designed to elevate your musical journey.MusicEra offers an intuitive and seamless user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",

      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: musicera,
    source_code_link: "https://github.com/Patelhetu-177/musicera",
  },
];

export { services, technologies, experiences, testimonials, projects };