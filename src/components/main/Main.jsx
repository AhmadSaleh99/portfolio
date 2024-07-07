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
    title: "Front end",
    img: "/public/images/test.png",
    category: "Front-End",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 2,
    title: "full stack",
    img: "/public/images/test.png",

    category: "Full-Stack",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 3,
    title: "Front end",
    img: "/public/images/test.png",
    category: "Front-End",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 4,
    title: "full stack",
    img: "/public/images/test.png",

    category: "Full-Stack",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 5,
    title: "Front end",
    img: "/public/images/test.png",
    category: "Front-End",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 6,
    title: "full stack",
    img: "/public/images/test.png",

    category: "Full-Stack",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 7,
    title: "Front end",
    img: "/public/images/test.png",
    category: "Front-End",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
  },
  {
    id: 8,
    title: "full stack",
    img: "/public/images/test.png",

    category: "Full-Stack",
    description: "project description",
    reviewLink: "#",
    gitLink: "#",
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
