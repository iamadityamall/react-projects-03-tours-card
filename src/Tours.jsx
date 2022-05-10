import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 justify-center py-10 gap-y-7 lg:gap-x-7  mx-10">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
