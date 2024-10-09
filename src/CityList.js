import React from 'react';
import './App.css';

function CityList(props) {
    const nameList = props.cityNameList;
    console.log("in CityList" + nameList);
    return (
        <div>
            <ul>
                {nameList.map((name, i) => { return <li  key={i}><span>{name}</span></li> })}
            </ul>
        </div>

    )
}

export default CityList
