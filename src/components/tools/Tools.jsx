import { useState } from "react";
import "./tools.css";
import { AnimatePresence, motion } from "framer-motion";

const button = [
  {
    id: 1,
    name: "Skills",
    value: "Skills",
  },
  {
    id: 2,
    name: "Tools",
    value: "Tools",
  },
];
const skills = [
  {
    id: 1,
    title: "HTML",
    img: "/images/html.png",
    category: "Skills",
  },
  {
    id: 2,
    title: "CSS",
    img: "/images/css.png",
    category: "Skills",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    img: "/images/js.png",
    category: "Skills",
  },
  {
    id: 4,
    title: "REACT JS",
    img: "/images/react.png",
    category: "Skills",
  },
  {
    id: 5,
    title: "NODE JS",
    img: "/images/nodejs.png",
    category: "Skills",
  },
  {
    id: 6,
    title: "EXPRESS JS",
    img: "/images/expressjs.png",
    category: "Skills",
  },
  {
    id: 7,
    title: "MONGODB",
    img: "/images/mongodb.png",
    category: "Tools",
  },
  {
    id: 8,
    title: "NEXT JS",
    img: "/images/nextjs-svgrepo-com.svg",
    category: "Skills",
  },
  {
    id: 9,
    title: "Tailwind css",
    img: "/images/tailwindcss.png",
    category: "Skills",
  },
  {
    id: 10,
    title: "Material ui",
    img: "/images/mui.png",
    category: "Tools",
  },
  {
    id: 11,
    title: "Firebase",
    img: "/images/firebase.png",
    category: "Tools",
  },
  {
    id: 12,
    title: "React Redux",
    img: "/images/redux.png",
    category: "Tools",
  },
  {
    id: 13,
    title: "Redux Toolkit",
    img: "/images/redux.png",
    category: "Tools",
  },
  {
    id: 14,
    title: "Git",
    img: "/images/git.png",
    category: "Tools",
  },
  {
    id: 15,
    title: "GitHub",
    img: "/images/github-color-svgrepo-com.svg",
    category: "Tools",
  },
  {
    id: 16,
    title: "Framer Motion",
    img: "/images/framerMotion.svg",
    category: "Skills",
  },
  {
    id: 17,
    title: "TypeScript",
    img: "/images/typescript-seeklogo.svg",
    category: "Skills",
  },
  {
    id: 18,
    title: "Python",
    img: "/images/python.png",
    category: "Skills",
  },
  {
    id: 18,
    title: "Vscode",
    img: "/images/vscode.png",
    category: "Tools",
  },
];

const Tools = () => {
  const [active, setActive] = useState("Skills");
  const [newProjectArray, setNewProjectArray] = useState(
    skills.filter((project) => {
      return project.category === "Skills";
    })
  );

  return (
    <div className="toolsContainer" id="skills">
      <h1 className="toolsTitle" id="skills">
        Skills & Tools
      </h1>
      <div className="mainSectionContainer">
        <section className="leftSection" style={{ paddingTop: "15px" }}>
          {button.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.value);
                const newArray = skills.filter((project) => {
                  return project.category === item.value;
                });

                setNewProjectArray(newArray);
              }}
              className={active === item.name ? "active" : null}
            >
              {item.value}
            </button>
          ))}
        </section>
        <div className="toolsRightSection">
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
                <img src={project.img} alt="photo" loading="lazy" />
                <div className="box">
                  <h1 className="projectTitle">{project.title}</h1>
                </div>
              </motion.div>
            ))}{" "}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tools;
