import React from "react";
import AddPoints from "./AddPoints";
import AllPoints from "./AllPoints";

function Card({ title }) {
  return (
    <div className="card" key={title}>
      <p className="title" key={title + 1}>
        {title}
      </p>
      {/* <span>Add card</span> */}
      <AllPoints topic={title} />
      <AddPoints topic={title} />
    </div>
  );
}

export default Card;
