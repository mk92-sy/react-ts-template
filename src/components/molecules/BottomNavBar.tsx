import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./BottomNavBar.module.scss";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(pathname);

  const menuItems = [
    { id: "sub1", href: "/a0002", icon: "" },
    { id: "home", href: "/a0001", icon: "" },
    { id: "sub2", href: "/a0003", icon: "" },
  ];

  return (
    <nav className={css.nav}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`${css.item} ${
            activeMenu === item.href ? css.active : ""
          }`}
          onClick={() => {
            navigate(item.href);
            setActiveMenu(item.href);
          }}
        >
          <span className={css.icon}>{item.icon}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavBar;
