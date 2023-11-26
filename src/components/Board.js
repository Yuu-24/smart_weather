import React, { useState, useEffect } from 'react';
import Item from './Item'
import TemperatureBarChart from '../TemperatureBarChart';

const Dashboard = () => {
  const [showGraph, setShowGraph] = useState(false);

    const handleButtonClick = () => {
        setShowGraph(!showGraph)
    };
  const [assets, setAssets] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-all-assets');
        const data = await response.json();
        const array = data.split("Response:");
        console.log(array);
        const parseData = JSON.parse(array[1]);
        setAssets(parseData);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  

  return (
    <>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Temperature bar graph</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {showGraph && <TemperatureBarChart data={assets.map((e) => e.Readings.Temperature + Math.random() * 20)}/>}
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className='text-center' style={{marginTop:"90px"}}>iWeather Dashboard</h2>
        <button className='btn btn-success btn-sm graph-button' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleButtonClick}>Show Graph</button>
        <div className="container my-4">
          <div className="row my-4">
                  {assets.map((e, index) => {
                      return (
                          <div className="col-md-3" key={e.RID}>
                              <Item id={e.RID} time = {e.Time} humidity = {e.Readings.Humidity} pressure = {e.Readings.Pressure} windspeed = {e.Readings.Windspeed}
                              temperature={e.Readings.Temperature}/>
                          </div>)
                  })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
