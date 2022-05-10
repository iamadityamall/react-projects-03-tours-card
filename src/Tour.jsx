import React from "react";
import { useState } from "react";

const Tour = ({ id, name, price, image, removeTour, info }) => {
  const [show, setShow] = useState(false);

  return (
    <article className="flex flex-col border-2 w-96 justify-between">
      <header>
        <img src={image} alt={name} className="object-cover w-full h-56" />
      </header>
      <footer className="flex flex-col p-4 space-y-4">
        <div className="flex justify-between ">
          <h3 className="text-blue-400 font-bold">{name}</h3>
          <p className="font-bold">${price}</p>
        </div>
        <div className="">
          <p>
            {show ? info : `${info.substring(0, 200)}.... `}
            <button onClick={() => setShow(!show)} className="text-blue-900 font-bold text-sm">
              {show ? "show less" : "read more"}
            </button>
          </p>
        </div>
      </footer>
      <button
        onClick={() => removeTour(id)}
        className="text-xl font-mono bg-blue-800 text-white p-2"
      >
        Not interested
      </button>
    </article>
  );
};

export default Tour;
