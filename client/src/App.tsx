import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  interface IDataElement {
    title: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  }

  let [api, setApi] = useState();
  let [data, setData] = useState<IDataElement[] | null>(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setApi(data.message));
  }, []);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data: IDataElement[]) => {
        console.log(data);

        setData(data);
        console.log("data: ", data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <b>From API</b> {api}
      </div>
      <div>
        <b>From DATA</b>{" "}
        <>
          {Array.isArray(data) ? data[0].timeframes.daily.current : "No data"}
        </>
      </div>
    </div>
  );
}

export default App;
