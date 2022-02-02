import React from "react";
import Tour from "./Tour";
import "./css/Tours.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <section id="TourDisplay">
      <div className="Title">
        <h2>Our Tours</h2>
      </div>
      <div className="tour-list">
        {tours.map((tour) => 
          <Tour
            key={tour.id}
            id={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
            removeTour={removeTour}
          />
        )}
      </div>
    </section>
  );
};

export default Tours;
