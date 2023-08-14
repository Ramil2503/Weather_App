import React, { useState } from "react"
import location from '../assets/images/svg/location.svg';
import CustomButton from "../components/UI/button/CustomButton";
import ChangeTheme from "../components/UI/themeToggler/ChangeTheme";
import CustomInput from "../components/UI/input/CustomInput";
import CancelButton from "../components/UI/button/cancelButton/CancelBtn";
import SearchHistory from "../components/UI/search/SearchHistory";

const Api_Key = '3956b7fa49f251f02a92fffdae70f079';

const AsideBar = () => {


    const [city, setCity] = useState('Москва')

    const getCity = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const cityURL = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1`);
            const data = await cityURL.json();

            if (!data[0].address.city) {
                error();
            } else {
                let lat = data[0].lat;
                let lon = data[0].lon;

                // Get existing search history or initialize an empty array
                let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

                // Add the new city to the search history
                searchHistory.unshift(city);

                // Keep only up to 5 search history items
                if (searchHistory.length > 5) {
                    searchHistory = searchHistory.slice(0, 5);
                }

                // Store the updated search history in localStorage
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

                localStorage.setItem('lat', lat);
                localStorage.setItem('lon', lon);

                e.target.elements.city.value = '';
                Cancel();
                getWeather();
            }
        }
    };

    const getWeather = async (e) => {
        let lat = localStorage.getItem('lat');
        let lon = localStorage.getItem('lon');

        const WeatherURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}`)
        const Weatherdata = await WeatherURL.json()
        console.log("weather", Weatherdata);
    }

    function error() {
        alert('Упс! Город не найден, попробуйте другой')
        setCity('Москва')
    }

    const AsideBlock = { temp: '1', realTemp: '-5', downfall: 'Снег', day: 'Вт', data: '2', mounth: 'дек', downfallPic: '/weather/snow.svg', }

    const [clicked, setClicked] = useState('')

    const showSearch = () => {
        clicked ? setClicked('') : setClicked('search-panel active');
    }

    function Cancel() {
        clicked ? setClicked('') : setClicked('search-panel');
    }

    return (
        <aside className="asidebar">
            <div className="asidebar__container">
                <div className="asidebar__header">
                    <CustomButton action={showSearch}> Поиск города</CustomButton>
                    <ChangeTheme />
                </div>

                <img className="asidebar__downfall-pic" src={AsideBlock.downfallPic} alt="Снежинка" />

                <div className="asidebar__footer">
                    <span className="asidebar__temp_fact"><span>{AsideBlock.temp}</span> °C</span>
                    <span className="asidebar__downfall">{AsideBlock.downfall}</span>
                    <span className="asidebar__temp_feels-like">Ощущается как {AsideBlock.realTemp} °C</span>

                    <div className="asidebar__date">
                        <span>Сегодня</span>
                        <span>{AsideBlock.day}, {AsideBlock.data} {AsideBlock.mounth}</span>
                    </div>

                    <div className="asidebar__location">
                        <img src={location} alt="Расположение" />
                        <p className="aside-board__footer__place__name">{city}</p>
                    </div>

                </div>

                <aside className={clicked || 'search-panel'}>
                    <CancelButton action={Cancel} />
                    <form className="search-panel__form" onSubmit={getCity}>
                        <CustomInput
                            name="city"
                            type='search'
                            placeholder='Москва'
                            onChange={e => setCity(e.target.value)} >
                        </CustomInput>
                        <button className="search-panel__search">Найти</button>

                    </form>
                    <SearchHistory
                    />
                </aside>
            </div>
        </aside>
    );
}

export default AsideBar;
