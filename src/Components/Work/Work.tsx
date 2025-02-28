import React, { useState } from "react";
import "./Work.css";
import JP from "../../assets/Jp.png";
import EMS from "../../assets/ems.png";
import Test from "../../assets/Test.gif";
import { Box, Modal } from "@mui/material";

interface Projects {
  name: string;
  image: string;
  url?: string;
  skills: string[];
  description?: string;
  gitLink?: string;
  viewLink?: string;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  // border: "1px solid white",
  boxShadow: 24,
  p: 4,
};
const WorkExperience: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayObject, setDisplayObject] = useState<Projects>({
    name: "",
    image: "",
    skills: [],
  });
  const projectList: Projects[] = [
    {
      name: "JavaScript Projects",
      image: JP,
      // url: "https://chinthojushivakumar.github.io/JavaScript_Projects/",
      skills: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
      description:
        "This is a basic projects contains Weather app, Todo list , Timer and Landing Page",
      gitLink: "https://github.com/ChinthojuShivakumar/JavaScript_Projects",
      viewLink: "https://chinthojushivakumar.github.io/JavaScript_Projects/",
    },
    {
      name: "Employee Management System",
      image: EMS,
      // url: "https://ems-frontend-793.pages.dev/",
      skills: [
        "React",
        "Tailwind CSS",
        "MUI",
        "React Quill",
        "Node Js",
        "Express Js",
        "MongoDB",
        "React Toastify",
        "Node Mailer",
        "JWT",
        "Bcrypt",
        "xlsx",
      ],
      description:
        "This project is about Employee Management System, with role based access control system(RBAC)",
      gitLink:
        "https://github.com/ChinthojuShivakumar/Attendance-and-Task-Management",
      viewLink:
        "https://www.linkedin.com/posts/shivakumarchinthoju1207_hello-connections-i-built-a-employee-management-activity-7292491565464174592-8u0L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQkWTgBpR7H3q4PPmGPFd5t95V8W4BECEM",
    },
    {
      name: "Infinite Scrolling",
      image: Test,
      // url: "https://ems-frontend-793.pages.dev/",
      skills: ["React", "Tailwind CSS", "MUI", "React Toastify", "Typescript"],
      description:
        "It is about, infinite scrolling using react-typescript and crud operation",
      gitLink: "https://github.com/ChinthojuShivakumar/InfiniteScrolling",
      viewLink: "https://infinite-scrolling-topaz.vercel.app/",
    },
  ];
  const handleClick = (project: Projects) => {
    setDisplayObject(project);
    setIsOpen(true);
  };

  console.log(displayObject);

  return (
    <div className="work">
      <div className="btn-container">
        <button>Projects List</button>
      </div>
      <div className="project-container">
        {projectList.map((project, i) => {
          return (
            <div
              className="system"
              onClick={() => handleClick(project)}
              rel="noopener noreferrer"
              key={i}
            >
              <div className="project-item">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-name">{project.name}</div>
              </div>
              <div className="stand"></div>
              <div className="hinge"></div>
            </div>
          );
        })}
      </div>
      <Modal open={isOpen}>
        <Box sx={style}>
          <div className="modal">
            <div className="close" onClick={() => setIsOpen(false)}>
              <p>X</p>
            </div>
            <h1 className="m-title">{displayObject["name"]}</h1>
            <p>{displayObject.description}</p>
            <p className="m-items">
              {displayObject.skills.map((item, i) => {
                return (
                  <p key={i} className="m-item">
                    {item}
                  </p>
                );
              })}
            </p>
            <div className="cta">
              <a
                href={displayObject.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <button type="button" className="cta-view">
                  View
                </button>
              </a>
              <a
                href={displayObject.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <button type="button" className="cta-git">
                  Github
                </button>
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default WorkExperience;
