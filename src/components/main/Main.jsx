import "./main.css";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Main = () => {
  return (
    <div className="mainSectionContainer">
      <section className="leftSection">
        <button className="allProjects active">All Projects</button>
        <button className="frontEnd">Front-End</button>
        <button className="fullStack">Full-Stack</button>
      </section>
      <div className="rightSection">
        <div className="card">
          <img src="/public/images/test.png" alt="photo" />
          <div className="box">
            <h1 className="projectTitle">projectTitle</h1>
            <p className="projectDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              excepturi dolor illum reprehenderit est doloremque rerum non,
            </p>
            <div className="projectLinks">
              <div className="rightSectionProjectSource">
                <span className="icon">
                  <LinkIcon />
                </span>
                <span className="icon">
                  <GitHubIcon />
                </span>
              </div>
              <a href="#" className="learnMore">
                More
                <span style={{ alignSelf: "end", margin: "5px 0 0 5px" }}>
                  <ArrowForwardIcon style={{ fontSize: "1rem" }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
