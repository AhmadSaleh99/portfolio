import Lottie from "lottie-react";
import "./hero.css";
import heroAnimation from "../../../public/animation/hero.json";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Hero = () => {
  return (
    <div className="heroSectionContainer">
      {/* left section // my information */}
      <section className="leftSection">
        <img src="/public/images/hero.png" alt="My photo" />
        <h1 className="heroSectionTitle">
          Software Engineer, And a Full Stack Web Developer.
        </h1>
        <p className="heroSectionDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          vitae. Reprehenderit, accusantium animi hic fuga optio inventore
          maiores cupiditate, a harum minus possimus itaque voluptatum eligendi
          corporis qui. Eaque, libero?
        </p>
        {/* social icons */}
        <div className="heroSectionIcons">
          <WhatsAppIcon style={{ cursor: "pointer" }} />
          <InstagramIcon style={{ cursor: "pointer" }} />
          <GitHubIcon style={{ cursor: "pointer" }} />
          <LinkedInIcon style={{ cursor: "pointer" }} />
        </div>
      </section>

      {/* right section // animated image */}
      <section className="RightSection">
        <Lottie
          // loop={false}
          style={{ height: 355 }}
          animationData={heroAnimation}
        />
      </section>
    </div>
  );
};

export default Hero;
