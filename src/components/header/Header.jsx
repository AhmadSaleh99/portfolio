import { useEffect, useState } from "react";
import "./header.css";

import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [lightDarkMode, SetLightDarkMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (lightDarkMode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [lightDarkMode]);

  return (
    <header className="headerContainer">
      <button className="menu" onClick={() => setShowModel(true)}>
        <MenuIcon />{" "}
      </button>

      {/* logo */}
      <div className="logo">
        <img src="/images/logo.png" alt="Saleh." style={{ width: "150px" }} />
      </div>

      {/* list items */}
      <ul className="navbarItems">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* light dark mode */}
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            lightDarkMode === "dark" ? "light" : "dark"
          );

          SetLightDarkMode(localStorage.getItem("currentMode"));
        }}
      >
        {lightDarkMode === "light" ? (
          <LightModeIcon style={{ color: "rgb(255,165,0)" }} />
        ) : (
          <NightlightIcon />
        )}
      </button>

      {/* model ** popup menu */}
      {showModel && (
        <div className="popupMenuBackground fixed">
          <ul className="popupModel">
            <button className="close" onClick={() => setShowModel(false)}>
              <CloseIcon />
            </button>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
