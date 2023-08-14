import React, { useState } from "react"
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";


const Forecast = ({WeekForecast, HoursForecast, title,}) => {

        const [activeTab, setActiveTab] = useState("tab1");
        const handleTab1 = () => {
            setActiveTab("tab1");
        };
        const handleTab2 = () => {
            setActiveTab("tab2");

        }
    
    return (
        <div className="forecast">
            <div className="forecast__header">
                <p className="forecast__header__title">{title}</p>
                <ul className="forecast__header__options">
                    <li className={activeTab === "tab1" ? "forecast__option active" : "forecast__option "} onClick={handleTab1}>на неделю</li>
                    <li className={activeTab === "tab2" ? "forecast__option active" : "forecast__option "} onClick={handleTab2}>почасовой</li>
                </ul> 
            </div>
            <div className="forecast__options__content">

                {activeTab === "tab1" ? <Tab1 WeekForecast={WeekForecast} /> : <Tab2 HoursForecast={HoursForecast} />}

            </div>

        </div>
    )
};

export default Forecast;
