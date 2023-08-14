import React from "react";
import "./searchlist.css";

const SearchHistory = (props) => {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    return (
        <ul className='search__block__container'>
            {searchHistory.map((item, index) => (
                <li key={index} className='search__item'>{item}</li>
            ))}
        </ul>
    );
};

export default SearchHistory;
