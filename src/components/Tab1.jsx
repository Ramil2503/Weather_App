import React, { useState } from "react";
import WeekForecastCard from "./WeekForecastCard";
import PreviousBtn from "./UI/button/actionButton/PreviosBtn";
import NextBtn from "./UI/button/actionButton/NextBtn";

const Tab1 = ({ WeekForecast }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 100;

  const handleNext = () => {
    if (currentIndex < WeekForecast.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isMaxScrolledLeft = currentIndex === 0;
  const isMaxScrolledRight = currentIndex === WeekForecast.length - 1;

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
          {WeekForecast.map((inf) => (
            <WeekForecastCard post={inf} key={inf.id} />
          ))}
        </div>
      </div>
      <NextBtn action={handleNext} isMaxScrolled={isMaxScrolledRight} />
    </div>
  );
};

export default Tab1;
