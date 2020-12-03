import React from "react";
import s from "./header.module.css";
const Header = () => {
  return (
    <div className={s.box}>
      <a href="#s">Home</a>
      <a href="#s">News</a>
      <a href="#s">Messages</a>
    </div>
  );
};
export default Header;
