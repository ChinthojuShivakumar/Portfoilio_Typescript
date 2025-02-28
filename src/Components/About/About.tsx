import React from "react";
import "./About.css";
// import Globe from "../Particles/Particles";
import HTML from "../../assets/tech/html5-emblem-orange-shield-and-white-text-vector.jpg";
import CSS from "../../assets/tech/css.png";
import Javascript from "../../assets/JavaScript_Logo.png";
import ReactJs from "../../assets/react-removebg-preview.png";
import Node from "../../assets/Node_logo_NodeJS-removebg-preview.png";
import Express from "../../assets/tech/tailwind-css7675.logowik.com.webp";
import Mongo from "../../assets/tech/mongodb.png";
import Mysql from "../../assets/mysql-removebg-preview.png";
import Python from "../../assets/tech/python.png";
import Mui from "../../assets/mui-removebg-preview.png";
import Typescript from "../../assets/tech/Typescript-logo-02.png";
import Jira from "../../assets/tech/jira.jpeg";
import GitHub from "../../assets/tech/GitHub-Logo.png";
import Netlify from "../../assets/tech/netlify.png";
import Varcel from "../../assets/tech/varcel.jpeg";

const About: React.FC = () => {
  const techLogos = [
    HTML,
    CSS,
    Javascript,
    Typescript,
    ReactJs,
    Node,
    Express,
    Mysql,
    Mongo,
    Python,
    Mui,
    Jira,
    GitHub,
    Netlify,
    Varcel,
  ];
  return (
    <div className="about-container">
      <div className="image-divs">
        {/* <img src="/4707122.png" alt="my-vector" />
         */}
        {techLogos.map((logo, i) => {
          return <img className="img" src={logo} alt={i.toString()} />;
        })}

        {/* <Globe /> */}
      </div>
      <div className="about-description">
        <div className="btn-container">
          <button>About the developer</button>
        </div>
        <div className="description">
          <p>
            I'm Shiva Kumar, a Full Stack MERN developer who loves learning and
            is devoted to my craft. I keep improving my abilities to create
            amazing user experiences and high-quality performance. With 1 year
            in this field, I aim to push the limits of what we can do in web
            development. Each day, I work to build smooth easy-to-use, and
            beautiful interfaces that make users happy and meet their needs.
          </p>
        </div>
        <div className="mobile">
          {techLogos.map((logo, i) => {
            return <img src={logo} alt={i.toString()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
