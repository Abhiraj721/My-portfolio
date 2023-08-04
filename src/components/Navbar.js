import React from "react";
import "../App.css";

export default function Navbar({btnText}) {
  return (
    <div className="NAV">
      <ol className="navBtn">
       {btnText}
      </ol>
    </div>
  );
}
