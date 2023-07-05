import React from "react";

const air_and_wind = (data) => {
  return (
    <>


      <div className="wraper_div">
        <div className="airwrap">

          <div className="astro">
            <h1 className="font-bold tr3">Astro Events</h1>
            <p><i className="uil uil-sun"></i> Sunrise <span className="ty45">{data.sunrise}</span></p>
            <p><i className="uil uil-sunset"></i> Sunset <span className="ty45">{data.sunset}</span></p>
            <p><i className="uil uil-moon"></i> Moon Rise <span className="ty45">{data.moonrise}</span></p>
            <p><i className="uil uil-moonset"></i> Moon Set <span className="ty45">{data.moonset}</span></p>
            <p><i className="uil uil-windy"></i> humidity <span className="ty45">{data.humidity}%</span></p>
            <p><i className="uil uil-raindrops-alt"> </i> chance of rain <span className="ty45">{data.rain_chance}%</span></p>

          </div>

          {/* -------------------------------------------------- */}
          <div className="wind">
            <h1 className="font-bold tr3"> Wind</h1>
            <p><i className="uil uil-wind"></i> Wind_Kph <span className="ty45">{data.wind}</span></p>
            <p><i className="uil uil-celsius"></i> wind_degree <span className="ty45">{data.wind_degree}</span></p>
            <p><i class="fas fa-skiing"></i> wind_dir <span className="ty45">{data.wind_dir}</span></p>
            <p><i className="uil uil-compress-point"></i> Pressur_in <span className="ty45">{data.pressur_in}</span></p>
            <p><i className="uil uil-cloud"></i> cloud <span className="ty45">{data.cloud}</span></p>
            <p><i className="uil uil-rainbow"></i> uv <span className="ty45">{data.uv}</span></p>
          </div>

          {/* ------------------------------------------------------------- */}
          <div className="air">
            <h1 className="font-bold tr3">Air qulity</h1>
            <p>co <span className="ty45">{data.co}</span></p>
            <p>no2 <span className="ty45">{data.no2}</span></p>
            <p>o3 <span className="ty45">{data.o3}</span></p>
            <p>so2 <span className="ty45">{data.so2}</span></p>
            <p>pm2.5 <span className="ty45">{data.pm2_5}</span></p>
            <p>pm10 <span className="ty45">{data.pm10}</span></p>
          </div>

        </div>

      </div>
    </>
  )
}

export default air_and_wind;
