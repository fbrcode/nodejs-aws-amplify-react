import logo from './logo.svg';
import './App.css';
import { API } from "aws-amplify";
import { useEffect, useState } from 'react';

function App() {

  useEffect (() => {
    fetchSensorData()
  }, [])

  const [myMessage, setMyMessage] = useState('')

  async function fetchSensorData() {
    API
      .get("sensorAPI", "/sensor/:sensorUUID", {})
        .then(response => {
          setMyMessage(response.status)
          console.log(response)
        })
        .catch(error => {
          console.log(error.response);
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Sensor status: {myMessage}</p>
      </header>
    </div>
  );
}

export default App;
