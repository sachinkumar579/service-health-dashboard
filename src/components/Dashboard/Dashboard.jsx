import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  let services = [
    {
      name: "App 123 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 456 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 789 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 011 Test",
      status: "DOWN",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 121 Test",
      status: "DOWN",
      url: "http://localhost:8080/app",
    }, {
      name: "App 123 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 456 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 789 Test",
      status: "UP",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 011 Test",
      status: "DOWN",
      url: "http://localhost:8080/app",
    },
    {
      name: "App 121 Test",
      status: "DOWN",
      url: "http://localhost:8080/app",
    },
  ];

  const [serviceNames, setServiceName] = useState(services);

  const onServiceNameChangeHandler = (event) => {
    let servicesFiltered = services.filter((data) => {
      if (data.name.toLowerCase().includes(event.target.value.toLowerCase()))
        return true;
    });

    if (event.target.value.trim() === 0) {
      setServiceName(services);
    } else {
      setServiceName(servicesFiltered);
    }
  };

  return (
    <div className="table">
      <input
        type="text"
        placeholder="search service"
        className="searchService"
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
          {serviceNames.length === 0 ? (
            <tr>
              <td></td>
              <td>No matching services</td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            serviceNames.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  {data.status === "UP" ? (
                    <span className="greenStatus"></span>
                  ) : (
                    <span className="redStatus"></span>
                  )}
                </td>
                <td>{data.url}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
