import React from "react";
import { useState, useEffect } from "react";
import Card from "./Components/Card/Card";
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
  let [data, setData] = useState<IDataElement[]>([
    {
      title: "title-default",
      timeframes: {
        daily: {
          current: 12,
          previous: 13,
        },
        weekly: {
          current: 14,
          previous: 15,
        },
        monthly: {
          current: 16,
          previous: 17,
        },
      },
    },
  ]);
  let [daily, setDaily] = useState(true);
  let [weekly, setWeekly] = useState(false);
  let [monthly, setMonthly] = useState(false);

  function handleDaily(): void {
    setWeekly(false);
    setMonthly(false);
    setDaily(true);
  }

  function handleWeekly(): void {
    setMonthly(false);
    setDaily(false);
    setWeekly(true);
  }

  function handleMonthly(): void {
    setWeekly(false);
    setDaily(false);
    setMonthly(true);
  }

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
  }, [daily, weekly, monthly]);

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
            <p className={`${daily ? "btn-active" : ""}`} onClick={handleDaily}>
              Daily
            </p>
            <p
              className={`${weekly ? "btn-active" : ""}`}
              onClick={handleWeekly}
            >
              Weekly
            </p>
            <p
              className={`${monthly ? "btn-active" : ""}`}
              onClick={handleMonthly}
            >
              Monthly
            </p>
          </div>
        </div>

        <Card
          props={data[0]}
          selection={daily ? "daily" : monthly ? "monthly" : "weekly"}
        />
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
