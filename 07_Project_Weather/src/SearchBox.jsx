import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function SearchBox({updeatInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_Key = "9b46fc36de82255e61e7a95a38dea684"
    let getWeatherInfo = async() =>{
        try{

            let respons = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`)
            let jesonRespons = await respons.json();
            let result = {
            city : city,
            temp : jesonRespons.main.temp,
            tempMin : jesonRespons.main.temp_min,
            tempMax : jesonRespons.main.temp_max,
            humidity: jesonRespons.main.humidity,
            feelsLike : jesonRespons.main.feels_like,
            weather: jesonRespons.weather[0].description,
        }
        return result;
    }catch(err){
        throw err;
    }
    }

    
    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{

            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updeatInfo(newInfo);
        }catch(err){
            setError(true); 
        }
    }
    return (
        <div className="SearchBox">
           
            <div style={{display:"flex", flexDirection:"column" ,justifyContent: "center"}}>
            <TextField id="city" label="city name" variant="outlined" value={city} onChange={handleChange} required/>
            <br />
            <Button variant="contained" size='large' type='submit' onClick={handleSubmit}>Search</Button>
            </div>
            {error ? <p style={{color:"red"}}>No Such Place Exists!!!</p> : null}
        </div>
    );
}