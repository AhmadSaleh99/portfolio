import "./main.css";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const button = [
  {
    id: 1,
    name: "My Projects",
    value: "My Projects",
  },
  { id: 2, name: "Design", value: "Design" },
];

const projects = [
    {
    id: 14,
    title: "Social Media Application (MemoRift)",
    img: "/images/p1.png",

    category: "My Projects",
    description: "",
    reviewLink: "https://beamish-kheer-f833c1.netlify.app",
    gitLink: "https://github.com/AhmadSaleh99/social-media-app.git",
  },
  {
    id: 1,
    title: "Gym Exercises",
    img: "/images/p8.png",
    category: "My Projects",
    description: "",

    reviewLink: "https://sage-meerkat-faedb8.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/gym-exercises",
  },
  {
    id: 2,
    title: "YouTube clone",
    img: "/images/p9.png",

    category: "My Projects",
    description: "",
    reviewLink: "https://subtle-lolly-f3fd73.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/youTube-Clone",
  },
  {
    id: 3,
    title: "Todo List",
    img: "/images/p10.png",
    category: "My Projects",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/todo-list/",
    gitLink: "https://github.com/AhmadSaleh99/todo-list",
  },
  {
    id: 4,
    title: "Simple Linkedin clone",
    img: "/images/p2.png",

    category: "My Projects",
    description: "",
    reviewLink: "https://linkedin-clone-7ed09.web.app/",
    gitLink: "https://github.com/AhmadSaleh99/linkedin-clone",
  },
  {
    id: 5,
    title: "simple netflix clone",
    img: "/images/p4.png",
    category: "My Projects",
    description: "",
    reviewLink: "https://netflix-clone-83a0f.web.app/",
    gitLink: "https://github.com/AhmadSaleh99/netflix-clone",
  },
  {
    id: 6,
    title: "Leon agency",
    img: "/images/p5.png",

    category: "Design",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/template-one/",
    gitLink: "https://github.com/AhmadSaleh99/template-one",
  },
  {
    id: 7,
    title: "Coffee Shop",
    img: "/images/p6.png",
    category: "Design",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/Coffee-Shope/",
    gitLink: "https://github.com/AhmadSaleh99/Coffee-Shope",
  },
  {
    id: 8,
    title: "GPT-3",
    img: "/images/p7.png",

    category: "Design",
    description: "",
    reviewLink: "https://stupendous-froyo-3d8f4f.netlify.app/",
    gitLink: "https://github.com/AhmadSaleh99/gpt_ash",
  },
  {
    id: 9,
    title: "Memory Card Game",
    img: "/images/p11.png",

    category: "My Projects",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/memory-card-game/",
    gitLink: "https://github.com/AhmadSaleh99/memory-card-game",
  },
  {
    id: 10,
    title: "Tic Tac Toe Game",
    img: "/images/p12.png",

    category: "My Projects",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/tic-tac-toe-game/",
    gitLink: "https://github.com/AhmadSaleh99/tic-tac-toe-game",
  },
  {
    id: 11,
    title: "Insure landing page",
    img: "/images/p15.png",

    category: "Design",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/challenge-one/",
    gitLink: "https://github.com/AhmadSaleh99/challenge-one",
  },
  {
    id: 12,
    title: "Special design for web development agency",
    img: "/images/p16.png",

    category: "Design",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/special-design/",
    gitLink: "https://github.com/AhmadSaleh99/special-design",
  },
  {
    id: 13,
    title: "Art Agency Landing page",
    img: "/images/p17.png",

    category: "Design",
    description: "",
    reviewLink: "https://ahmadsaleh99.github.io/template-two/",
    gitLink: "https://github.com/AhmadSaleh99/template-two",
  },

];
const Main = () => {
  const [active, setActive] = useState("My Projects");
    // const [isLoaded, setIsLoaded] = useState(false);
  const [newProjectArray, setNewProjectArray] = useState(projects.filter((project) => project.category === "My Projects"));

  return (
    <div className="mainSectionContainer" id="projects">
      <section className="leftSection">
        {button.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.value);
              const newArray = projects.filter(project=> project.category === item.value);
                // item.value !== "My Projects"
                //   ? projects.filter((project) => {
                //       return project.category === item.value;
                //     })
                //   : projects;
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
              {/* {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
      )} */}
              <img src={project.img} alt="photo" loading="lazy"
            //    className={`w-full h-full object-cover rounded ${isLoaded ? "block" : "hidden"}`}
            // onLoad={()=>setIsLoaded(true)}
            />
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
