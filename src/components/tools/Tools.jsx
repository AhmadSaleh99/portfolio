import React, { useState } from "react";
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
const projects = [
  {
    id: 1,
    title: "HTML",
    img: "/public/images/html.png",
    category: "Skills",
  },
  {
    id: 2,
    title: "CSS",
    img: "/public/images/css.png",
    category: "Skills",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    img: "/public/images/js.png",
    category: "Skills",
  },
  {
    id: 4,
    title: "REACT JS",
    img: "/public/images/react.png",
    category: "Skills",
  },
  {
    id: 5,
    title: "NODE JS",
    img: "/public/images/nodejs.png",
    category: "Skills",
  },
  {
    id: 6,
    title: "EXPRESS JS",
    img: "/public/images/expressjs.png",
    category: "Skills",
  },
  {
    id: 7,
    title: "MONGODB",
    img: "/public/images/mongodb.png",
    category: "Tools",
  },
  {
    id: 8,
    title: "NEXT JS",
    img: "/public/images/nextjs-svgrepo-com.svg",
    category: "Skills",
  },
  {
    id: 9,
    title: "Tailwind css",
    img: "/public/images/tailwindcss.png",
    category: "Skills",
  },
  {
    id: 10,
    title: "Material ui",
    img: "/public/images/mui.png",
    category: "Tools",
  },
  {
    id: 11,
    title: "Firebase",
    img: "/public/images/firebase.png",
    category: "Tools",
  },
  {
    id: 12,
    title: "React Redux",
    img: "/public/images/redux.png",
    category: "Tools",
  },
  {
    id: 13,
    title: "Redux Toolkit",
    img: "/public/images/redux.png",
    category: "Tools",
  },
  {
    id: 14,
    title: "Git",
    img: "/public/images/git.png",
    category: "Tools",
  },
  {
    id: 15,
    title: "GitHub",
    img: "/public/images/github-color-svgrepo-com.svg",
    category: "Tools",
  },
  {
    id: 16,
    title: "Framer Motion",
    img: "/public/images/framerMotion.svg",
    category: "Skills",
  },
  {
    id: 17,
    title: "TypeScript",
    img: "/public/images/typescript-seeklogo.svg",
    category: "Skills",
  },
  {
    id: 18,
    title: "Python",
    img: "/public/images/python.png",
    category: "Skills",
  },
  {
    id: 18,
    title: "Vscode",
    img: "/public/images/vscode.png",
    category: "Tools",
  },
];

const Tools = () => {
  const [active, setActive] = useState("Skills");
  const [newProjectArray, setNewProjectArray] = useState(
    projects.filter((project) => {
      return project.category === "Skills";
    })
  );

  return (
    <div className="toolsContainer">
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
                const newArray = projects.filter((project) => {
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
                <img src={project.img} alt="photo" />
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
