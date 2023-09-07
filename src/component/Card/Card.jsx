import React from "react";
import style from "./Card.module.css";

export const Card = ({ name, picture, moves, id, height, attack, className}) => {
  return (
    <div className={className}>
      <p className={style.card__title}>{name}</p>
      <img className={style.card__picture} src={picture} alt={name}></img>
      <div className={style.card__info}>
        <p>Снялся в {moves} сериях </p>
        <p>Id: {id}</p>
        <p>height: {height}</p>
        <p>attack: {attack}</p>
      </div>
    </div>
  );
};
