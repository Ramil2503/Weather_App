import React, { useState } from "react";
import HoursForecastCard from "./HoursForecastCard";
import PreviousBtn from "./UI/button/actionButton/PreviosBtn";
import NextBtn from "./UI/button/actionButton/NextBtn";

const Tab2 = ({ HoursForecast }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 100;

  const handleNext = () => {
    if (currentIndex < HoursForecast.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isMaxScrolledLeft = currentIndex === 0;
  const isMaxScrolledRight = currentIndex === HoursForecast.length - 1;

  return (
    <div className="forecast__option__item active">
      <PreviousBtn action={handlePrevious} isMaxScrolled={isMaxScrolledLeft} />
      <div className="forecast__option__cards">
        <div
          className="forecast__option__cards__container"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {HoursForecast.map((inf) => (
            <HoursForecastCard post={inf} key={inf.id} />
          ))}
        </div>
      </div>
      <NextBtn action={handleNext} isMaxScrolled={isMaxScrolledRight} />
    </div>
  );
};

export default Tab2;
