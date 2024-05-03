import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar className="container">
      <section id="header" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="logo"
          alt="GeekFoods Logo"
          style={{ height: "60px", marginRight: "10px" }}
        />
        <h2 style={{ margin: "0" }}>GeekFoods</h2>
      </section>
      <section className="list">
        <ul className="nav-list">
          <li id="fix" >
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#quote">Quote</a>
          </li>
          <li>
            <a href="#restaurants">Restaurants</a>
          </li>
          <li>
            <a href="#foods">Foods</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </section>
      <section id="btn">
        <button>Get Started</button>
      </section>
    </navbar>
  );
};

export default Navbar;
