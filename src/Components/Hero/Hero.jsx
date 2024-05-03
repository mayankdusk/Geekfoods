import "./Hero.css";

const Hero = () => {
  return (
    <header>
      <div className="head-text">
        <div className="head-image">
          <img
            src={
              "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            }
            alt="Freedom Blog"
          />
        </div>
        <div className="text-on-image">
          <h1>Let us find your</h1>
          <h1 className="subtitle"> Forever Food.</h1>
          <br />
          <p id="texti">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <br />
          <span>
            <button id="redbg">Search Now</button>
            <button id="redtxt">Know more</button>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
