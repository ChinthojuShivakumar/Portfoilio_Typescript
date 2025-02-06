import React from "react";
import "./Navbar.css";

interface NavItems {
  menu: string;
  url: string;
}

const Navbar: React.FC = () => {
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
      menu: "Contact",
      url: "contact",
    },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
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
    </div>
  );
};

export default Navbar;
