import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <p className="info">
        {props.details}

    </p>
  );
}
