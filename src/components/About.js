import React from "react";
import "../App.css";
import Myintro from "./Myintro";
export default function About() {
  return (
    <div>
      <section className="section-2" id="section2">
        <center>
          <h2>ABOUT ME</h2>
        </center>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <center>
              <img
              data-aos="zoom-out-down"
                className="myimage"
                src={require("./images/abhi-modified.png")}
                alt=""
              />
              <h4>
                <a data-aos="zoom-out-up" href="https://www.linkedin.com/in/abhiraj-bhosle-694a72217/" class="fa fa-linkedin"></a>{" "}
                <a data-aos="zoom-out-up" href="https://twitter.com/Abhiraj_bhosle" class="fa fa-twitter"></a>{" "}
                <a data-aos="zoom-out-up" href="https://github.com/Abhiraj721" class="fa fa-github"></a>{" "}
                <a data-aos="zoom-out-up" href="https://www.instagram.com/astroindian/" class="fa fa-instagram"></a>
              </h4>
            </center>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Myintro></Myintro>
          </div>
        </div>
      </section>
    </div>
  );
}
