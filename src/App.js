import React, {useState} from 'react'
import { fetchWeather } from './api/fetchWeather'
const App = () => {
    const [city, setCity]= useState('')
    const [weather, setWeather]= useState({})
    const search=async(e)=>{
        // url='http://api.openweathermap.org/data/2.5/weather?q=kaithal&appid=915f1aa716dfff8ef893761367841f57'
        if(e.key==='Enter')
        {
            console.log(city)
            const data = await fetchWeather(city)
            setWeather(data)
            setCity('')
        } 
         
    }
    return (
        <div>
            <h2>My weather App</h2>
            <input type='text' value={city} onChange={(e)=>{setCity(e.target.value)}} on onKeyPress={search}/>
            <h4>{weather.name}</h4>
        </div>
    )
}
export default App

