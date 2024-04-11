import React from "react";

const QuickView = (props) => {
  return (
    <div className="w-60 flex-shrink-0 rounded overflow-hidden shadow-lg mx-2 mb-10">
      <div>
        <img src={props.image} />
      </div>
      <div className="bg-gray-300 pt-2">
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default QuickView;
