import React from "react";
import Skillrange from "./Skillrange";
import Leetcard from "./Leetcard";
export default function Skills() {
  return (
    <div>
      <section class="section-3" id="section3">
       <center> <h2 className="sec2head"><l>SKILLS</l> </h2></center>
        <br />
        <div className="row">
          <Skillrange id={"Htmlcssjs"} value={21} skill="HTML,CSS,JS"></Skillrange>
          <Skillrange id={"react"} value={16} skill="REACT"></Skillrange>
          <Skillrange id={"java"} value={20} skill="JAVA"></Skillrange>
          <Skillrange id={"unity"} value={18} skill="UNITY,C#"></Skillrange>
          <Skillrange id={"unity"} value={18.5} skill="DSA"></Skillrange>
          <Skillrange id={"unity"} value={19} skill="PYTHON"></Skillrange>
        </div>
        <br />
        <Leetcard/>
        <center>
          <br />
       <h5 className="resume"> <a target="blank" href="https://drive.google.com/file/d/13jM720SQv6fuUsBD4YMbks9N9TkrOlzF/view">Download My Resume</a></h5>
       <br />
        </center>
      </section>
    </div>
  );
}
