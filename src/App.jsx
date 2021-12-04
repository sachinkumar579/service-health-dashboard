import './App.css'
import React from "react";
import Login from "./components/Login/Login.jsx";
import useToken from "./components/App/useToken.js";
import Dashboard from './components/Dashboard/Dashboard';
import AppUsageChart from './components/Charts/AppUsageChart';

function App() {

  const { token, setToken } = useToken();

  if (token == undefined || token == "") {
    return <Login setToken={setToken}></Login>;
  }

  return <div><Dashboard></Dashboard></div>;
}

export default App