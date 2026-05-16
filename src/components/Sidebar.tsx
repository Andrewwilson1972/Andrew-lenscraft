import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaImage,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "#home",
    },

    {
      name: "About",
      icon: <FaUser />,
      link: "#about",
    },

    {
      name: "Gallery",
      icon: <FaImage />,
      link: "#gallery",
    },

    {
      name: "Contact",
      icon: <FaEnvelope />,
      link: "#contact",
    },
  ];

  return (
    <>
      <div className="menu-btn" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </div>

        <h2 className="logo">Lenscraft</h2>

        <ul>
          {menuItems.map((item) => (
            <a href={item.link} key={item.name}>
              <li
                className={activeItem === item.name ? "active-menu" : ""}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
              >
                {item.icon}

                <span>{item.name}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
