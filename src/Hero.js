import React,{useRef} from 'react';
import Services from './components/Services';
import Weather from './images/weather.gif'

const Hero = () => {

  return (
    <div className='wrap-div'>
      <div className='in-wrap-div'>
        <div className='amin-ty'>
          <h1 className='main-text'>find the best <br /> solution together</h1>
          <p>
            <b>Why did the cloud break up with the lightning bolt?<br></br></b>
            - Because it felt shocked and wanted some space!<br />
            <b>Why did the cloud break up with the sunshine?<br /></b>
            - Because it couldn't handle the heat!
          </p>
          <button>get started
            <span class="material-icons ui">
              send
            </span>
          </button>
          <h1 className='service-text'>our sevices</h1>
          <div className='services-row'>
            <Services
              icon="energy_savings_leaf"
              name="AQI"
            />
            <Services
              icon="insights"
              name="ASTRO"
            />
            <Services
              icon="air"
              name="WIND"
            />
          </div>

        </div>
      </div>
      <div className='in-wrap-div'>
        {/* cercle 2* */}
        <div className='cercle'>
          {/* --------------------------------------- */}
{/* gif part */}
          {/* ----------------------------------------------------------- */}
          <img className='gif' src={Weather} alt='Loading ....' />

        </div>
      </div>
    </div>
  )
}

export default Hero;