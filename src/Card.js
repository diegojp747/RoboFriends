import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-blue dib br3 grow pa3 ma2 bw2 shadow-4">
      <img src={`https://robohash.org/robot${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
