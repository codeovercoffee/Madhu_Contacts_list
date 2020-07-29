import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div>
        <img className="circle-img" alt="why " src={props.isrc} />

    </div>
  );
}
