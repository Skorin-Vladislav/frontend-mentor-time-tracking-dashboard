import React from "react";
import { useState, useEffect } from "react";

import user from "./Assets/Images/image-jeremy.png";
import "./Assets/Styles/App.scss";

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
      <div className="cards">
        <div className="main-card">
          <div className="main-card-header">
            <img src={user} alt="user" />
            <div className="card-desc">
              <p className="report-for">Report for</p>
              <p className="user-name">Jeremy Robson</p>
            </div>
          </div>
          <div className="btn-selectors">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
      </div>
      {/* <div>
        <b>From API</b> {api}
      </div>
      <div>
        <b>From DATA</b>{" "}
        <>
          {Array.isArray(data) ? data[0].timeframes.daily.current : "No data"}
        </>
      </div> */}
    </div>
  );
}

export default App;
