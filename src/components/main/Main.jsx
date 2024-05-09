import "./main.css";

const Main = () => {
  return (
    <div className="mainSectionContainer">
      <div className="leftSection">
        <ul className="projectsFilterList">
          <li className="allProjects active">All Projects</li>
          <li className="frontEnd">Front-End</li>
          <li className="fullStack">Full-Stack</li>
        </ul>
      </div>
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
                <span className="projectView">icon</span>
                <span className="projectSourceCode">icon</span>
              </div>
              <a href="#" className="learnMore">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
