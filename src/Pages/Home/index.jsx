import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Description from "../../Components/Description/Descriptions";
import "./style.css";

const index = () => {
  return (
    <div className="contact">
      <Navbar />
      <Hero />
      <Description />
    </div>
  );
};

export default index;
