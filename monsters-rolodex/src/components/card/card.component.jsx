import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="cat"
        src={`https://robohash.org/${props.person.id}?set=set5&`}
      />
      <h1 key={props.person.id}> {props.person.name}</h1>
    </div>
  );
};
