import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
const Header: React.FC = () => {
  const roles: string[] = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
  ];
  return (
    <div className="container">
      <div className="header-container">
        <div className="text-div">
          <h5>Hello There, I'm</h5>
          <h1>Shiva Kumar Chinthoju</h1>
          <p style={{ display: "flex", gap: "10px" }}>
            I am into{" "}
            <span>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  wrapperClassName:
                    "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
                  cursorClassName:
                    "text-violet-700 dark:text-violet-600 text-lg md:text-2xl",
                }}
              />
            </span>
          </p>
          <p className="tag-line">
            I Create user-friendly and Visually appealing web solutions.
          </p>
          <a
            href="https://www.linkedin.com/in/shivakumarchinthoju1207"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Let's Connect</button>
          </a>
          <button id="resume-d" className="resume-download" type="button">
            <a
              href={"ShivaResume29052025.pdf"}
              download={"ShivaResume29052025.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              // style={{ textDecoration: "none", color:"white" }}
            >
              Resume
            </a>
          </button>
        </div>
        <div className="image-div">
          <img src="/4707122.png" alt="my-vector" />
        </div>
      </div>
    </div>
  );
};

export default Header;
