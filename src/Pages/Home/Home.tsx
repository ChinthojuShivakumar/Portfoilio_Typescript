import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import WorkExperience from "../../Components/Work/Work";
import Footer from "../../Components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div id="header" style={{ width: "100%" }}>
        <Header />
      </div>
      <div id="about" style={{ width: "100%" }}>
        <About />
      </div>
      <div id="projects" style={{ width: "100%" }}>
        <WorkExperience />
      </div>
      <div id="contact" style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
