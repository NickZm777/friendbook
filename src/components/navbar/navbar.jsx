import React from "react";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#a">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#a">News</a>
      </div>
      <div className={s.item}>
        <a href="#a">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#a">Music</a>
      </div>
      <div className={s.item}>
        <a href="#a">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
