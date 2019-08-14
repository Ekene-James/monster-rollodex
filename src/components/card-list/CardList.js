import React from "react";
import "./Card-list.css";
import Card from "../card/Card";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
