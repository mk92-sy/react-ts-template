import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./BottomNavBar.module.scss";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(pathname);

  const menuItems = [
    { id: "sub1", href: "/components", icon: "components" },
    { id: "home", href: "/", icon: "home" },
    { id: "sub2", href: "/readme", icon: "readme" },
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
          <span className={css.icon} />
        </button>
      ))}
    </nav>
  );
};

export default BottomNavBar;
