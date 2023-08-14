import React from "react"

const HoursForecastCard = (props) => {
return (
    <div className="forecast__option__card" data-id="{props.post.id}">
            <div> 
                <div className="forecast__date">{props.post.time}</div>
                <img src={props.post.imgSrc} alt="Упс..." className="forecast__image" />
                <div className="forecast__tempreature">
                    <p>{props.post.maxTemp}°C</p>
                </div>
            </div>
        </div>
)
};

export default HoursForecastCard;
