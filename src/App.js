import './App.css';
import Searchbar from './components/searchbar';
import About from "./About";
import Home from "./Home";
import Hero from './Hero';
import { Helmet } from 'react-helmet';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Helmet>
            <title>Weather app</title>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          </Helmet>
          <section>
            <Searchbar />
            <Routes>
              <Route path='/' element={<Hero />} />
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/about' element={<About />} />
              <Route path='/:city' element={<Home />} />
            </Routes>
          </section>
      </BrowserRouter>
    </>
  );
}

export default App;


