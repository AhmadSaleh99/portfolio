import { useState } from "react";
import "./header.css";

import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const [lightDarkMode, SetLightDarkMode] = useState("dark");
  return (
    <header className="headerContainer">
      {/* logo */}
      <div className="logo">logo</div>

      {/* list items */}
      <ul className="navbarItems">
        <li>About</li>
        <li>Articles</li>
        <li>Projects</li>
        <li>Speaking</li>
        <li>Contact</li>
      </ul>

      {/* light dark mode */}
      <button
        onClick={() =>
          lightDarkMode === "dark"
            ? SetLightDarkMode("light")
            : SetLightDarkMode("dark")
        }
      >
        {lightDarkMode === "light" ? <LightModeIcon /> : <NightlightIcon />}
      </button>
    </header>
  );
};

export default Header;
