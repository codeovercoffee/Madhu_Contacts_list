import React from "react";
import "./styles.css";
import Detail from "./Detail";


export default function App(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" alt="why " src={props.isrc} />
      </div>
      <div className="bottom">
        <Detail details={props.phone}/>
<Detail details={props.email}/>
      </div>
    </div>
  );
}
