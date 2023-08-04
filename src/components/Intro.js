import React from "react";
import "../App.css";
import Typed from 'typed.js';

export default function Intro() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am a <i>Web Developer</i>", "I am a <i>Game Developer</i>","I am an <i>Astrophotographer</i>"],
      typeSpeed: 50,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App" >
      <center>
        <section class="section-1" id="section1">
        <img className="bird" src="https://i.gifer.com/2vDc.gif" alt="" />
          <h1   className="introName fade-up-left">Abhiraj Bhosle</h1>
          <span className="typer"  ref={el}/>
          <br /><br />
        </section>
       
      </center>
    </div>
  );
}
