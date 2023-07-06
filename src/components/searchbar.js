import React, { useState } from "react";
import axios from "axios";
// const axios = require("axios")
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [rlist,setRlist] =useState([]);

  const fetchData = (value) => {

    const sapi = `http://api.weatherapi.com/v1/search.json?key=15be0e6a88e24c30be5151812231906&q=${value}`;
    axios
      .get(sapi)
      .then((res) => {
        const result = res.data
        setRlist(result);
        console.log(rlist);
      })
      .catch((err) => {
        console.log(err)
      })

  }
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }


  return (
    <>
      <div className="nav">

        <div className="divq">
          <a href="/">
            <button className="button"><i className="fas fa-home"></i></button>
          </a>
        </div>

        <div className="divq qset">
          <button className=""><i className="fas fa-search"></i></button>
          <input
            placeholder="Search For Citys"
            className=""
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className="divq">
          <button className="button"><a href="/about"><i className="fa-solid fa-mug-hot"></i> About</a></button>
        </div>

      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="searchresult">
        <SearchResult names={rlist}/>
      </div>
    </>

  )
}

export default Searchbar;
