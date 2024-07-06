import { useState } from "react";
import "./header.css";

import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [lightDarkMode, SetLightDarkMode] = useState("dark");
  const [showModel, setShowModel] = useState(false);
  return (
    <header className="headerContainer">
      <button className="menu" onClick={() => setShowModel(true)}>
        <MenuIcon />{" "}
      </button>

      {/* logo */}
      <div className="logo">logo</div>

      {/* list items */}
      <ul className="navbarItems">
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
