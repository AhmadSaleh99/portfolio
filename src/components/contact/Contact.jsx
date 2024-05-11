import Lottie from "lottie-react";
import "./contact.css";
import contactAnimation from "../../../public/animation/contact.json";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <span className="icon">icon</span>
        <span className="contactTitle">Contact us</span>
        <p className="contactDescription">
          Contact me by sending an Email or scroll to top for my social media
          links.{" "}
        </p>
      </div>
      <div className="contactBody">
        <div className="leftSide">
          <form className="contactForm">
            <label htmlFor="">Email address: </label>
            <input type="email" />
            <label htmlFor="">Message: </label>
            <textarea rows="4" cols="50" />

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="rightSide">
          <Lottie
            // loop={false}
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
