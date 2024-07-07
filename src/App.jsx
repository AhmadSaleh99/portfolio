import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/heroSection/Hero";
import Main from "./components/main/Main";
import { ArrowUpward } from "@mui/icons-material";
import Tools from "./components/tools/Tools";
import Aboutme from "./components/about/Aboutme";

function App() {
  const [shpwScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
  }, []);

  return (
    <div id="header" className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Aboutme />
      <div className="divider"></div>
      <Tools />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />

      <a
        href="#header"
        style={{ transition: "1s", opacity: shpwScrollToTop ? 1 : 0 }}
      >
        <button className="scrollToTop">
          <ArrowUpward style={{ fontSize: "1.4rem" }} />
        </button>
      </a>
    </div>
  );
}

export default App;
