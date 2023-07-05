import React, { useEffect, useState } from "react";

const WeatherWrap = (data) => {
  const [staqi, setStaqi] = useState('');
  const [col, setCol] = useState('');

  useEffect(() => {
    const setStatus = () => {
      if (data.Aqi <= 3 && data.Aqi >= 1) {
        setStaqi('good');
      } else if (data.Aqi >= 4 && data.Aqi <= 6) {
        setStaqi('moderate');
      } else if (data.Aqi >= 7 && data.Aqi <= 9) {
        setStaqi('poor');
      } else {
        setStaqi('very poor');
      }
    };
    setStatus();

    const setcolour = () => {
      if (data.Aqi <= 3 && data.Aqi >= 1) {
        setCol('green');
      } else if (data.Aqi >= 4 && data.Aqi <= 6) {
        setCol('yellow');
      } else if (data.Aqi >= 7 && data.Aqi <= 9) {
        setCol('orange');
      } else {
        setCol('red');
      }
    }
    setcolour();
  }, [data]);

  return (
    <div className="wraper_div">
      <div className="airwrap gy">
        <div className='dfix'>
          <div className=''>
            <h1 className='text-white font-bold t1 tu6'>{data.title}</h1>
            <h1 className='text-white t3'><i className="uil uil-user-location"></i> {data.cname},{data.rname}</h1>
            <h1 className="text-white font-bold t3 tspace"><i className="uil uil-temperature-minus"></i> feelslike {data.feelslike}<span>&deg;c</span></h1>
          </div>
          <h1 className='text-white font-bold t1 degree'><i className="uil uil-temperature-half"></i>{data.temp}<span>&deg;c</span></h1>
        </div>
        <div>
          <img
            className='pic1'
            src={data.icon}
            alt="weather"
          />
          <p className="ty4"><i className="fas fa-leaf"></i> AQI <span className={col}>{staqi}</span></p>
        </div>

      </div>
    </div>
  )
}
export default WeatherWrap;
