import React from "react";
import "./Content.css";
const Content = (props) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin_">
          <img src={props.Img} alt="crypto" />
          <h1>{props.Name}</h1>
          <p className="coin-symbol">{props.Symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> Price:  ${props.Price}</p>
          <p className="coin-volume">24h Vol.: ${props.volume.toLocaleString()}</p>
                   {props.priceChange < 0 ? (
            <p className="coin-percent red">{props.priceChange.toFixed(2)}</p>
          ) : (
            <p className="coin-percent green">{props.priceChange.toFixed(2)}</p>
          )}
          <p className="coin-marketCap">Mkt: ${props.marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
