import React from 'react'
import "../App.css";
export default function Skillrange({id,value,skill}) {
  return (
    <div  className='col-lg-6 col-sm-12' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500">
      <center>
        <h5 className='skillnames'>{skill}</h5>
       <input  className='range' type="range" min={5} max={27} value={value}  id={id} />
       </center>
       <br />
    </div>
  )
}
