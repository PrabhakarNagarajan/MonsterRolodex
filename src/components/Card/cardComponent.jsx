import { Component } from "react";

import "./cardComponent.css";

const Card = ({ monster }) => {
  const { email, id, name } = monster;
  return (
    <div className="card-container " key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${name}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
