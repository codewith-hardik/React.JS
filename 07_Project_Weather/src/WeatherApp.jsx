import { useState } from "react";
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Ahmedabad",
        feelsLike: 21.08,
        humidity: 73,
        temp: 21.02,
        weather: "haze",
        tempMax: 21.02,
        tempMin: 21.02,
    });

    let updeatInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }

    return(
        <div>
            <h1 style={ {textAlign:"center"}}>Weather App By Hardik!!!</h1>
        <hr />
            <SearchBox updeatInfo={updeatInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}