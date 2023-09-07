import React, { useEffect, useState } from "react";
import { Button } from "../../ui/Button/Button";
import { Card } from "../../component/Card/Card";
import style from "./Main.module.css";

export const Main = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  useEffect(() => {
    const first = data[0];
    if (data.length > 0) {
      fetch(first.url)
        .then((res) => res.json())
        .then((card) =>
          setCard({
            name: card.name.charAt(0).toUpperCase()+ card.name.slice(1),
            picture: card.sprites?.front_shiny,
            moves: card.moves.length,
            id: card.id,
            height: card.height,
            attack: card.stats[1].base_stat,
          }));
    }
  },[data]);

  useEffect(() => {
    console.log('lsls');
    fetch(card.url)
      .then((res) => res.json())
      .then((card) =>
        setCard({
          name: card.name.charAt(0).toUpperCase() + card.name.slice(1),
          picture: card.sprites?.front_shiny,
          moves: card.moves.length,
          id: card.id,
          height: card.height,
          attack: card.stats[1].base_stat,
        })
      )
      .catch((err) => console.log(err));
  }, [card]);

  const handlerBtn = (name) => {
    const obj = data.find((el) => el.name === name);
    setCard(obj);
  };

  return (
    <main>
      <div className={style.conteiner}>
        <div className={style.buttons}>
          {data.map((el, i) => (
            <Button handler={handlerBtn} name={el.name} key={i} />
          ))}
        </div>
        <Card
          className={style.card}
          name={card.name}
          picture={card.picture}
          moves={card.moves}
          id={card.id}
          height={card?.height}
          attack={card?.attack}
        />
      </div>
    </main>
  );
};
