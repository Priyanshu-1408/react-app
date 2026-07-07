import SearchBox from "./SearchBox"
import InfoBox from "./Infobox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 14.26,
        humidity: 63,
        temp: 15.05,
        tempMin: 15.05,
        tmepMax: 15.05,
        weather: "smoke", 
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App by Priyanshu</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}