import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <p className={style.title}>Покемоны API</p>
      <div className={style.info}>
        <div className={style.info__icon}></div>
        <p className={style.info__text}>Нажмите на нужного Покемона</p>
      </div>
    </header>
  );
};
