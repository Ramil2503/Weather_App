import React, { useState } from "react"
import Forecast from "../components/Forecast";
import WeatherDetails from "../components/WeatherDetails";

const MainBoard = (props) => {


    const [WeekForecast] = useState (
        [
            {"id": "2","day": "Завтра", "date": '',"month": '',"imgSrc": "/weather/foggy.svg", "maxTemp": 10,"minTemp": 4},
            {"id": "5", "day": "Пн,","date": '15', "month": 'мар', "imgSrc": "/weather/rainy.svg","maxTemp": 10,"minTemp": 4},
            {"id": "1","day": "Вт,", "date": '16',"month": 'мар',"imgSrc": "/weather/rainy.svg","maxTemp": 10,"minTemp": 4},
            {"id": "4", "day": "Ср,","date": '17',"month": 'мар',"imgSrc": "/weather/thunder.svg","maxTemp": 10,"minTemp": 4},
            {"id": "3","day": "Чт,", "date": '18',"month": 'мар',"imgSrc": "/weather/thunder.svg","maxTemp": 10,"minTemp": 4},
            {"id": "8","day": "Пт,", "date": '19',"month": 'мар',"imgSrc": "/weather/thunder.svg","maxTemp": 10, "minTemp": 4},
        ]
    )

    const [HoursForecast] = useState (
        [
            {"id": "2","time": "15:00","imgSrc": "/weather/foggy.svg","maxTemp": 10},
            {"id": "5","time": "16:00","imgSrc": "/weather/foggy.svg","maxTemp": 10},
            {"id": "1","time": "17:00","imgSrc": "/weather/foggy.svg","maxTemp": 10},
            {"id": "3","time": "18:00","imgSrc": "/weather/foggy.svg","maxTemp": 10},
            {"id": "9","time": "19:00","imgSrc": "/weather/thunder.svg","maxTemp": 10},
            {"id": "11","time": "20:00","imgSrc": "/weather/thunder.svg","maxTemp": 10},
        ]
    )

    const [info] = useState ([
        {id: 821, title: 'Скорость ветра', digit: '7' ,variable: 'м/с', speed: 'C3'},
        {id: 2, title: 'Влажность', digit: '84' ,variable: '%'},
        {id: 3, title: 'Видимость', digit: '6.2' ,variable: 'км'},
        {id: 4, title: 'Давление', digit: '742' ,variable: 'мм рт.ст'},
    ])
    
    return (
        <div className="board__main">
            <Forecast WeekForecast={WeekForecast} HoursForecast={HoursForecast} title="Прогноз" />
            <WeatherDetails info={info} title="Подробно на сегодня" />
        </div>
    )
};

export default MainBoard;
