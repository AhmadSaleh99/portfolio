import "./header.css";

const Header = () => {
  return (
    <header className="headerContainer">
      {/* logo */}
      <div className="logo">logo</div>

      {/* list items */}
      <ul className="navbarItems">
        <li>About</li>
        <li>Articles</li>
        <li>Projects</li>
        <li>Speaking</li>
        <li>Contact</li>
      </ul>

      {/* light dark mode */}
      <button>light/dark</button>
    </header>
  );
};

export default Header;
