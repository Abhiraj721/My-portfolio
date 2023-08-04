import React from "react";
import "../App.css";
export default function Contact() {
  return (
    <div >
      <section className="section-5" id="section5">
        <center>
          <h2 className="contacthead">CONTACT</h2>
          <p className="container-fluid contactP">
            Please feel welcome to contact me via email at
            abhirajbhosle74@gmail.com.
          </p>
          <div className="row container">
            <div className="col-6  socials" >
              <ul>
                <h5>Dev Profiles</h5>
                <a target="black" href="https://leetcode.com/abhirajbhosle75/s">
                  <li>LeetCode</li>
                </a>
                <a target="black" href="https://github.com/Abhiraj721">
                  <li>GitHub</li>
                </a>
                <a target="black" href="https://auth.geeksforgeeks.org/user/abhirajbhosle75/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
                  <li>GeeksForGeeks</li>
                </a>
              </ul>
            </div>
            <div className="col-6 socials" >
              <ul>
            <h5>Socials Profiles</h5>
                <a target="black" href="https://www.linkedin.com/in/abhiraj-bhosle-694a72217/">
                  <li>LinkedIn</li>
                </a>
                <a target="black" href="https://twitter.com/Abhiraj_bhosle">
                  <li>Twitter</li>
                </a>
                <a target="black" href="https://www.instagram.com/astroindian/">
                  <li>Instagram</li>
                </a>
              </ul>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
}
