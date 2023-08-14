import React from "react"
import Detail from "./WDetail";


const WeatherDetails = ({info, title}) => {

    return (
        <div className="weather__today">
                <p className="weather__today__title">{title}</p>

                <ul className="weather__today__info">
                    {info.map((inf, index) =>
                        <Detail number={index+1}  post={inf} key={inf.id}/>  
                    )}
                </ul>
        </div>
    )
}

export default WeatherDetails;