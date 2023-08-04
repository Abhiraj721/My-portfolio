import React from "react";
import "../App.css";
import ProjectList from "./ProjectsArray";
import { useState } from "react";
export default function Projects() {
  const [category,Setcategory]=useState("");
  function uptadeCategory(e)
  {
    Setcategory(e.target.id);
  }
  return (
    <div>
      <section className="section-4" id="section4">
        <center>
          <h2 className="sec2head">
            <l>PROJECTS</l>
          </h2>
          <p className="sort">SORT BY:</p>
          <p><button className="button-30" id="gamedev" onClick={uptadeCategory}>Game Development</button><button className="button-30" id="webdev" onClick={uptadeCategory}>Web Development</button><button className="button-30" id="AI" onClick={uptadeCategory}>Artificial Inteligence</button><button className="button-30" id="" onClick={uptadeCategory}>Show All</button></p>
          <div className="row">
            {ProjectList.map((arr) => {
              {
                if (arr.category != category && category!="") return;
              }
              return (
                <div className="col-lg-4 col-sm-12" data-aos="zoom-out-right">
                  <div class="project-card">
                    <img
                      src={require(`./images/${arr.imgURL}`)}
                      alt="Project Image"
                    />
                    <div class="project-info container">
                      <h3>{arr.projectName}</h3>
                      <p className="container">{arr.projectDescription}</p>
                     <a href={arr.link} target="blank"> <button class="button-54" role="button">
                        {arr.btntext}
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </center>
      </section>
    </div>
  );
}
