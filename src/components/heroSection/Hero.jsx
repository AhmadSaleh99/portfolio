import Lottie from "lottie-react";
import "./hero.css";
import heroAnimation from "../../../public/animation/hero.json";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";

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
            src="/public/images/hero.png"
            alt="My photo"
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
          Software Engineer, And a Full Stack Web Developer.
        </motion.h1>
        <p className="heroSectionDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          vitae. Reprehenderit, accusantium animi hic fuga optio inventore
          maiores cupiditate, a harum minus possimus itaque voluptatum eligendi
          corporis qui. Eaque, libero?
        </p>
        {/* social icons */}
        <div className="heroSectionIcons">
          <a className="icon" href="">
            <WhatsAppIcon style={{ cursor: "pointer" }} />
          </a>
          <a className="icon" href="">
            <InstagramIcon style={{ cursor: "pointer" }} />
          </a>
          <a className="icon" href="">
            <GitHubIcon style={{ cursor: "pointer" }} />
          </a>{" "}
          <a className="icon" href="">
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
