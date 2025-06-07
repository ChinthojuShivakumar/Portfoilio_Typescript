import React, { useState } from "react";
import "./Navbar.css";
import { Box, Modal } from "@mui/material";
// import Resume from "../../../public/ShivaResume02062025.pdf"

interface NavItems {
  menu: string;
  url: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "60%", lg: "60%", xl: "60%", xxl: "80%" },
  height: "80%",
  bgcolor: "background.paper",
  // border: "1px solid white",
  boxShadow: 24,
  p: 4,
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navItems: NavItems[] = [
    {
      menu: "Home",
      url: "header",
    },
    {
      menu: "About",
      url: "about",
    },
    {
      menu: "Projects",
      url: "projects",
    },
    {
      menu: "Resume",
      url: "resume",
    },
    {
      menu: "Contact",
      url: "contact",
    },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (id === "resume") {
      setIsOpen(true);
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-item-header">
          <h1>Shiva Kumar Portfolio</h1>
        </div>
        <div className="nav-items">
          {navItems.map((item, i) => {
            return (
              <p
                className="nav-item"
                key={i}
                onClick={() => item.url && handleScroll(item.url)}
              >
                {item.menu}
              </p>
            );
          })}
        </div>
      </nav>
      <Modal open={isOpen}>
        <Box sx={style}>
          <div className="modal">
            <div className="close" onClick={() => setIsOpen(false)}>
              <p>X</p>
            </div>
            <div className="resume-containter">
              <iframe
                src="ShivaResume29052025.pdf"
                className="resume"
                width="100%"
                height="400px"
              ></iframe>
            </div>
            <div className="button-container">
              <button className="resume-download" type="button">
                <a
                  href={"ShivaResume29052025.pdf"}
                  download={"ShivaResume29052025.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  // style={{ textDecoration: "none", color:"white" }}
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
