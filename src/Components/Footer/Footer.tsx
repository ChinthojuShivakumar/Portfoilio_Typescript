import React from "react";
import "./Footer.css";
import { MdLocationPin } from "react-icons/md";

interface Icons {
  link: string;
  icon: string;
  name: string;
}

const Footer: React.FC = () => {
  const data: Icons[] = [
    {
      link: "mailto:shivakumarchinthoju@gmail.com",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13t5aWIkxLI2TlFua-bko7d49U38uZjNWFQ&s",
      name: "Gmail",
    },
    {
      link: "https://www.instagram.com/shivakumar_chinthoju/",
      icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png",
      name: "Instagram",
    },
    {
      link: "https://www.linkedin.com/in/shivakumarchinthoju1207",
      icon: "https://cdn-icons-png.freepik.com/256/2504/2504923.png?ga=GA1.1.1711650620.1722021099&semt=ais_hybrid",
      name: "Linkedin",
    },
    {
      link: "https://github.com/ChinthojuShivakumar",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuxfIwbP85wISg0d8lYc8rAK3CWTuOnnWHQ&s",
      name: "github",
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer">
        <p className="footer-p">
          Let’s collaborate and create something amazing.
        </p>
        <p>
          Start by saying <a href={data[0].link}>hello</a>
        </p>
      </div>
      <div className="address">
        <div>
          <h5 className="f-h5">
            <MdLocationPin />
            Hyderabad, India
          </h5>
          <h6>© 2025 Shiva Kumar. All rights reserved.</h6>
        </div>
        <div className="social">
          {data.map((icons, i) => {
            return (
              <a
                href={icons.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <img src={icons.icon} alt={icons.name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
