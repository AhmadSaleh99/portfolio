import Lottie from "lottie-react";
import "./contact.css";
import contactAnimation from "../../../public/animation/contact.json";
import smallContactIcon from "../../../public/animation/smallContact.json";
import doneAnimation from "../../../public/animation/done.json";
import { ValidationError, useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvweqeq");

  return (
    <div className="contactContainer">
      <div className="contactHeader" id="contact">
        <span className="icon">
          <Lottie
            // loop={false}
            style={{ height: 40 }}
            animationData={smallContactIcon}
          />
        </span>
        <span className="contactTitle">Contact us</span>
        <p className="contactDescription">
          Contact me by sending an Email or scroll to top for my social media
          links.{" "}
        </p>
      </div>
      <div className="contactBody">
        <div className="leftSide">
          <form className="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="">Email address: </label>
            <input autoComplete="off" type="email" id="name" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="">Message: </label>
            <textarea rows="4" cols="50" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="submitButton"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "sending" : "send"}
            </button>
            {state.succeeded && (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  marginTop: "1.7rem",
                }}
              >
                <Lottie
                  loop={false}
                  animationData={doneAnimation}
                  style={{ height: 55 }}
                />{" "}
                Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
        <div className="rightSide">
          <Lottie
            // loop={false}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
