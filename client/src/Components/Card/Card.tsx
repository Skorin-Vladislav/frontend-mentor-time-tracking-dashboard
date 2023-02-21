import React from "react";
import icon_work from "../../Assets/Images/icon-work.svg";
import icon_ellipsis from "../../Assets/Images/icon-ellipsis.svg";
import { useEffect } from "react";
import "../../Assets/Styles/Card.scss";

function Card(props: any) {
  useEffect(() => {}, [props]);

  const checkType = () => {
    console.log(typeof props);
    console.log(props.selection);
    console.log(props);
  };

  return (
    <div className="time-card">
      <div className="time-card-header">
        <img src={icon_work} alt=""></img>
      </div>
      <div className="time-card-info">
        <div className="info-wrapper">
          <div>
            <div className="title">{props.props.title}</div>
            <div className="time-spent" onClick={checkType}>
              32Hrs
            </div>
          </div>
          <div>
            <img src={icon_ellipsis} alt=""></img>
            <div className="prev-span-results">Last Week - 36 hours</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
