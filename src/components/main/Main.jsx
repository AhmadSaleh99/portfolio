import "./main.css";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const button = [
  {
    id: 1,
    name: "All Projects",
    value: "All Projects",
  },
  { id: 2, name: "Front-End", value: "Front-End" },
  { id: 3, name: "Full-Stack", value: "Full-Stack" },
];

const projects = [
  {
    id: 1,
    title: "Gym Exercises",
    img: "/public/images/p8.png",
    category: "Front-End",
    description: "",

    reviewLink: "https://sage-meerkat-faedb8.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/gym-exercises",
  },
  {
    id: 2,
    title: "YouTube clone",
    img: "/public/images/p9.png",

    category: "Front-End",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",

    reviewLink: "https://subtle-lolly-f3fd73.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/youTube-Clone",
  },
  {
    id: 3,
    title: "Todo List",
    img: "/public/images/p10.png",
    category: "Front-End",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",

    reviewLink: "https://ahmadsaleh99.github.io/todo-list/",
    gitLink: "https://github.com/AhmadSaleh99/todo-list",
  },
  {
    id: 4,
    title: "Simple Linkedin clone",
    img: "/public/images/p2.png",

    category: "Full-Stack",
    description:
      "a simple Linkedin clone project built with React, Redux, and Firebase. Sign up, log in, and effortlessly share your thoughts through text-based posts. Elevate your professional presence in a user-friendly environment designed for simplicity and connectivity.The project brings together the power of React for a dynamic user interface, Redux for state management, and Firebase for secure authentication and real-time data storage",

    reviewLink: "https://linkedin-clone-7ed09.web.app/",
    gitLink: "https://github.com/AhmadSaleh99/linkedin-clone",
  },
  {
    id: 5,
    title: "simple netflix clone",
    img: "/public/images/p4.png",
    category: "Front-End",
    description:
      " Introducing FlixHub – a React-based Netflix-inspired project that brings the world of movies to your fingertips. With Firebase authentication, dive into a personalized movie exploration experience. Browse through diverse categories, discover new releases, and read detailed movie descriptions.",

    reviewLink: "https://netflix-clone-83a0f.web.app/",
    gitLink: "https://github.com/AhmadSaleh99/netflix-clone",
  },
  {
    id: 6,
    title: "Leon agency",
    img: "/public/images/p5.png",

    category: "Full-Stack",
    description:
      "A profitional design for an online agency called Leon with html, css, webfonts and js.",

    reviewLink: "https://ahmadsaleh99.github.io/template-one/",
    gitLink: "https://github.com/AhmadSaleh99/template-one",
  },
  {
    id: 7,
    title: "Coffee Shop",
    img: "/public/images/p6.png",
    category: "Front-End",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",

    reviewLink: "https://ahmadsaleh99.github.io/Coffee-Shope/",
    gitLink: "https://github.com/AhmadSaleh99/Coffee-Shope",
  },
  {
    id: 8,
    title: "GPT-3",
    img: "/public/images/p7.png",

    category: "Full-Stack",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",

    reviewLink: "https://stupendous-froyo-3d8f4f.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/gpt_ash",
  },
];
const Main = () => {
  const [active, setActive] = useState("All Projects");
  const [newProjectArray, setNewProjectArray] = useState(projects);

  return (
    <div className="mainSectionContainer">
      <section className="leftSection">
        {button.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.value);
              const newArray =
                item.value !== "All Projects"
                  ? projects.filter((project) => {
                      return project.category === item.value;
                    })
                  : projects;
              setNewProjectArray(newArray);
            }}
            className={active === item.name ? "active" : null}
          >
            {item.value}
          </button>
        ))}
      </section>
      <div className="rightSection">
        <AnimatePresence>
          {newProjectArray.map((project) => (
            <motion.div
              layoyt
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className="card"
              key={project.id}
            >
              <img src={project.img} alt="photo" />
              <div className="box">
                <h1 className="projectTitle">{project.title}</h1>
                <p className="projectDescription">{project.description}</p>
                <div className="projectLinks">
                  <div className="rightSectionProjectSource">
                    <a href={project.reviewLink} className="icon">
                      <LinkIcon />
                    </a>
                    <a href={project.gitLink} className="icon">
                      <GitHubIcon />
                    </a>
                  </div>
                  <a href="#" className="learnMore">
                    More
                    <span style={{ alignSelf: "end", margin: "5px 0 0 5px" }}>
                      <ArrowForwardIcon style={{ fontSize: "1rem" }} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}{" "}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Main;
