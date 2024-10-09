import './App.css';
import React, { useState, useRef } from 'react';
import CityList from "./CityList";

function App() {
  const [citynameList, setCitynameList] = useState([]);
  const [error, setError] = useState("");
  const cityNameRef = useRef();

  const addToCityList = (e) => {
    e.preventDefault();
    setError("");
    let cityName = cityNameRef.current.value;
    console.log(cityName);
    console.log("citynameList.includes(cityName)" + citynameList.includes(cityName));
    cityName = cityName.trim();
    if (cityName == '') {
      setError("# Empty entry");
      return;
    }
    if (citynameList.includes(cityName)) {
      setError("# Duplicate entry");
      return;
    }
    setCitynameList(prevNames => {
      return [...prevNames, cityName]
    })

    cityNameRef.current.value = null;

  }
  return (
    <div className="App">
      <div className="container my-5">
        <form className="row g-2" >
          <div className="col-auto">
            <input ref={cityNameRef} type="text" className="form-control" id="inputCity" placeholder="Enter city name" />
            <span className='errorMsg'>{error}</span>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={e => { addToCityList(e) }} >Add City</button>
          </div>
        </form>
        <CityList cityNameList={citynameList}></CityList>
      </div>
    </div>
  );
}

export default App;
