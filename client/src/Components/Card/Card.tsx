import React from "react";

import icon_ellipsis from "../../Assets/Images/icon-ellipsis.svg";
import { useEffect } from "react";
import "../../Assets/Styles/Card.scss";

function Card(props: any) {
  useEffect(() => {}, [props]);

  return (
    <div>
      {props.props.title === "default-title" ? (
        "Loading ..."
      ) : (
        <div className="time-card">
          <div
            className="time-card-header"
            id={`${props.props.title.replaceAll(" ", "")}`}
          >
            <img alt={props.props.title}></img>
          </div>
          <div className="time-card-info">
            <div className="info-wrapper">
              <div>
                <div className="title">{props.props.title}</div>
                <div className="time-spent">
                  {`${props.props.timeframes[props.selection].current}Hrs`}
                </div>
              </div>
              <div>
                <img src={icon_ellipsis} alt=""></img>
                <div className="prev-span-results">{`${
                  props.selection === "daily"
                    ? "Yesterday"
                    : props.selection === "weekly"
                    ? "Last Week"
                    : "Last Month"
                } - ${
                  props.props.timeframes[props.selection].previous
                }hrs`}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
