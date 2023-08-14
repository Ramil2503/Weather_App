import React from "react";
import wind from '../assets/images/svg/wind.svg';


const WDetail = (props) => {
    return (
            <li className="weather__today__card">
                <div> 
                    <div className="weather__today__card__heading">{props.post.title}</div>
                    <p className="weather__today__card__data">{props.post.digit}<span>{props.post.variable}</span></p>
                    <div className="weather__today__card__photo">
                        <img src={wind} alt="Показатели погоды" />
                        <span>СЗ</span>
                    </div>
                </div>
            </li>
    )
}

export default WDetail