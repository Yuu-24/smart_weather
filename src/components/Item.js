import React from 'react';

export default function Item(props) {

    const { id, time, humidity, pressure, windspeed, temperature } = props;

  return (
    <>
        <div className="card my-2"> 
                   
            <span className="d-flex position-absolute end-0 badge rounded-pill bg-secondary" >Asset {id}</span>
            
            <img src={"https://source.unsplash.com/random/?weather" } className="card-img-top" alt="..." />
            <div className="card-body">
                
                <p className="card-text">Humidity: {humidity} gm-3</p>
                <p className="card-text">Pressure: {pressure} bar</p>
                <p className="card-text">Windspeed: {windspeed} ms-1</p>
                <p className="card-text">Temperature: {temperature} &deg;C</p>
                <p>{time}</p>
            </div>
        </div>
    </>
  )
}
