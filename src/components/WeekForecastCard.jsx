import React from "react"

const WeekForecastCard = (props) => {
    return (
        <div className="forecast__option__card" data-id="{props.post.id}">
            <div> 
                <div className="forecast__date">{props.post.day} {props.post.date} {props.post.month}</div>
                <img src={props.post.imgSrc} alt="Упс..." className="forecast__image" />
                <div className="forecast__tempreature">
                    <p>{props.post.maxTemp}°C</p>
                    <span className="forecast__tempreature__min">{props.post.minTemp}°C</span>
                </div>
            </div>
        </div>
    )
};

export default WeekForecastCard;
