import React from "react";

//import "./StatusCards.css";

// import "./StatusCards.scss";

const StatusCard = (props) => {
  return (
    <div className="status__card">
      <div className="status__card__title">
        <span>{props.title} abc</span>
      </div>
      <div className="status__card__info">
        <div className="status__card__info__count">
          <h4>{props.count} efg</h4>
        </div>{" "}
        <div className="status__card__info__icon">
          <i className={props.icon}>this</i>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
