import React from "react";
import style from "./Button.module.css";

export const Button = ({ name, handler }) => {
  return (
    <div className={style.buttons}>
      <button onClick={()=> handler(name)}>{name}</button>;
    </div>
  );
};
