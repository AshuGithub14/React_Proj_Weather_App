import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 36.05,
        humidity: 94,
        temp: 29.05,
        tempMin: 29.05,
        tempMax: 29.05,
        weather: "overcast clouds"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}