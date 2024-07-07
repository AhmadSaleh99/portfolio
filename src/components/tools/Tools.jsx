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
    title: "Skills",
    img: "/public/images/test.png",
    category: "Skills",
  },
  {
    id: 2,
    title: "Tools",
    img: "/public/images/test.png",
    category: "Tools",
  },
  {
    id: 3,
    title: "Skills",
    img: "/public/images/test.png",
    category: "Skills",
  },
  {
    id: 4,
    title: "Tools",
    img: "/public/images/test.png",
    category: "Tools",
  },
  {
    id: 5,
    title: "Skills",
    img: "/public/images/test.png",
    category: "Skills",
  },
  {
    id: 6,
    title: "Tools",
    img: "/public/images/test.png",
    category: "Tools",
  },
  {
    id: 7,
    title: "Skills",
    img: "/public/images/test.png",
    category: "Skills",
  },
  {
    id: 8,
    title: "Tools",
    img: "/public/images/test.png",
    category: "Tools",
  },
  {
    id: 9,
    title: "Skills",
    img: "/public/images/test.png",
    category: "Skills",
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
      <h1 className="toolsTitle">Skills & Tools</h1>
      <div className="mainSectionContainer">
        <section className="leftSection">
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
                  <p className="projectDescription">{project.description}</p>
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
