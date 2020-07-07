import axios from "axios";
const url = 'http://api.openweathermap.org/data/2.5/weather'
const app_id='915f1aa716dfff8ef893761367841f57'
export const fetchWeather= async(city)=>{
    const {data} = await axios.get(url,{
        params:{
            q:city,
            units:'metric',
            APPID:app_id
        }
    })
    return data
}