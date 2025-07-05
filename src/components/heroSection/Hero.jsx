import Lottie from "lottie-react";
import "./hero.css";
import heroAnimation from "../../../public/animation/hero.json";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";
import { Email } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="heroSectionContainer">
      {/* left section // my information */}
      <section className="leftSection">
        <div className="parentAvatar" style={{ minHeight: "88px" }}>
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="/images/hero.png"
            alt="My photo"
            loading="lazy"
          />
          <span>
            <VerifiedIcon className="iconVerified" />
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="heroSectionTitle"
        >
          Ahmad Mohamad Saleh
        </motion.h1>
        <p className="heroSectionDescription">
          Empowering businesses with dynamic web applications as a full stack
          web developer, merging creativity with cutting-edge development
          expertise.
        </p>
        {/* social icons */}
        <div className="heroSectionIcons">
          <a className="icon" href="https://wa.me/963993407695">
            <WhatsAppIcon style={{ cursor: "pointer" }} />
          </a>
          <a className="icon" href="mailto:saleehsaleh816@gmail.com">
            <Email style={{ cursor: "pointer" }} />
          </a>
          <a className="icon" href="https://github.com/AhmadSaleh99/">
            <GitHubIcon style={{ cursor: "pointer" }} />
          </a>{" "}
          <a className="icon" href="/">
            <LinkedInIcon style={{ cursor: "pointer" }} />
          </a>{" "}
        </div>
      </section>

      {/* right section // animated image */}
      <section className="RightSection">
        <Lottie
          // loop={false}
          // style={{ height: 355 }}
          animationData={heroAnimation}
        />
      </section>
    </div>
  );
};

export default Hero;
