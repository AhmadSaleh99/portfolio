import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
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
      <div className="logo">
        <img
          src="/images/logo.png"
          alt="Saleh."
          style={{ width: "150px", margin: "1rem 0" }}
        />
      </div>
    </div>
  );
};

export default Footer;
