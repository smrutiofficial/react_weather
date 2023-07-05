import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import React from "react";
import axios from 'axios';
import AirAndWind from './components/AirAndWind';
import WeatherWrap from './components/WeatherWrap';
const Home = () => {
  const [myData, setMyData] = useState([]);
  const {city}=useParams();

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=15be0e6a88e24c30be5151812231906&q=${city}&aqi=yes`)
      .then((res) => {

        const wtitle = res.data.current.condition.text
        const ic = res.data.current.condition.icon
        const icon = ic;
        const temp = res.data.current.temp_c
        const feelslike = res.data.current.feelslike_c
        const cname = res.data.location.name
        const rname = res.data.location.region
        const wind_kph = res.data.current.wind_kph
        const wind_degree = res.data.current.wind_degree
        const wind_dir = res.data.current.wind_dir
        const Pressur_in = res.data.current.pressure_in
        const humidity = res.data.current.humidity
        const cloud = res.data.current.cloud
        const uv = res.data.current.uv
        // const chance_of_rain =res.data.current.condition
        // -----------------------------------------------------------------------
        const forecast = res.data.forecast.forecastday
        const sunrise = forecast[0].astro.sunrise
        const sunset = forecast[0].astro.sunset
        const moonrise = forecast[0].astro.moonrise
        const moonset = forecast[0].astro.moonset

        const rain_chance = forecast[0].day.daily_chance_of_rain

        // ---------------------------------------------------------------------

        // ---------------------------------------------------------------------------------------
        const co = Math.round((res.data.current.air_quality.co * 10) / 10).toFixed(1)
        const no2 = Math.round((res.data.current.air_quality.no2 * 10) / 10).toFixed(1)
        const o3 = Math.round((res.data.current.air_quality.o3 * 10) / 10).toFixed(1)
        const so2 = Math.round((res.data.current.air_quality.so2 * 10) / 10).toFixed(1)
        const pm2_5 = Math.round((res.data.current.air_quality.pm2_5 * 10) / 10).toFixed(1)
        const pm10 = Math.round((res.data.current.air_quality.pm10 * 10) / 10).toFixed(1)

        const aqidata = res.data.current.air_quality
        const aqi = Object.values(aqidata)[6]
        // console.log(aqi)

        const list = [wtitle, icon, temp, feelslike, humidity, uv, wind_kph, cname, rname, wind_degree, wind_dir, Pressur_in, cloud, co, no2, o3, so2, pm2_5, pm10, sunrise, sunset, moonrise, moonset, aqi, rain_chance]
        // console.log(list)
        // console.log(forecast[0].astro);
        setMyData(list)
      });
  }, [city]);

  return (
    <>

      <WeatherWrap title={myData[0]}
        icon={myData[1]}
        temp={myData[2]}
        feelslike={myData[3]}
        cname={myData[7]}
        rname={myData[8]}
        Aqi={myData[23]}
      />
      {/*---------------------------------------------------------*/}
      <AirAndWind
        humidity={myData[4]}
        uv={myData[5]}
        wind={myData[6]}
        wind_degree={myData[9]}
        wind_dir={myData[10]}
        pressur_in={myData[11]}
        cloud={myData[12]}

        co={myData[13]}
        no2={myData[14]}
        o3={myData[15]}
        so2={myData[16]}
        pm2_5={myData[17]}
        pm10={myData[18]}

        sunrise={myData[19]}
        sunset={myData[20]}
        moonrise={myData[21]}
        moonset={myData[22]}
        rain_chance={myData[24]}

      />
      {/*---------------------------------------------------------*/}
    </>
  )
}

export default Home;