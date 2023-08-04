import React from "react";
import "../App.css";
export default function Leetcard() {
  return (
    <div >
      <center>
        <h4  data-aos="flip-right" className="leetcardhead">LeetCode Progress</h4>
        <iframe
         data-aos="flip-right"
          className="leetcard " 
          src="https://leetcard.jacoblin.cool/abhirajbhosle75?theme=wtf&font=DM%20Sans&ext=activity"
          frameborder="0"
        ></iframe>
      </center>
    </div>
  );
}
