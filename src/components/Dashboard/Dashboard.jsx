import React, { useState } from "react";
import AppUsageChart from "../Charts/AppUsageChart";
import "./Dashboard.css";
import services from './Services.json' // This data should come from a REST API call

const Dashboard = () => {
  const [serviceData, setServiceName] = useState(services.data);
  const [displayServiceState, setDisplayServiceState] = useState()

  const displayChart = (event) => {
    let serviceData = services.data;
    serviceData.forEach((item) => {
      if (item.name === event.currentTarget.cells[1].textContent) {
        setDisplayServiceState(item);
      }
    })
  }


  const onServiceNameChangeHandler = (event) => {
    let servicesDataFiltered = services.data

    if (event.target.value.trim() != 0) {
      servicesDataFiltered = services.data.filter((data) => {
        if (data.name.toLowerCase().includes(event.target.value.toLowerCase()))
          return true;
      });
    }
    setServiceName(servicesDataFiltered);
  }

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="search service"
        className="dashboard-search"
        onChange={onServiceNameChangeHandler}
      ></input>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Status</th>
            <th>URL</th>
          </tr>
          {serviceData.length === 0 ? (
            <tr>
              <td></td>
              <td>No matching services</td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            serviceData.map((data, index) => (
              <tr key={index} className='dashboard-service' onClick={displayChart}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  {data.status === "UP" ? (
                    <span className="green-status"></span>
                  ) : (
                    <span className="red-status"></span>
                  )}
                </td>
                <td>{data.url}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>{
        displayServiceState != null && <AppUsageChart service={displayServiceState}></AppUsageChart>
      }
    </div>
  );
};

export default Dashboard;
