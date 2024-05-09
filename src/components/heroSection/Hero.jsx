import "./hero.css";

const Hero = () => {
  return (
    <div className="heroSectionContainer">
      {/* left section // my information */}
      <section className="leftSection">
        <img src="/public/images/hero.png" alt="My photo" />
        <h1 className="heroSectionTitle">Ahmad Saleh</h1>
        <p className="heroSectionDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          vitae. Reprehenderit, accusantium animi hic fuga optio inventore
          maiores cupiditate, a harum minus possimus itaque voluptatum eligendi
          corporis qui. Eaque, libero?
        </p>
        {/* social icons */}
        <div className="heroSectionIcons"></div>
      </section>

      {/* right section // animated image */}
      <section className="RightSection">Animation</section>
    </div>
  );
};

export default Hero;
