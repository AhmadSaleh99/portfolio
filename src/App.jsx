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
import SkeletonPage from "./components/skeleton loader/SkeletonPage";
import { motion } from "framer-motion";


function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Scroll button logic
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonPage />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container"
          id="header"
        >
        <div id="header">
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
            style={{ transition: "1s", opacity: showScrollToTop ? 1 : 0 }}
            >
            <button className="scrollToTop">
              <ArrowUpward style={{ fontSize: "1.4rem" }} />
            </button>
          </a>
        </div>
            </motion.div>
      )}
    </>
  );
}

export default App;
