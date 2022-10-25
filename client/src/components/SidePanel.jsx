import React from 'react'
import { Link } from 'react-router-dom'

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resizeListener() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener("resize", resizeListener);


const sidePanel = () => {

  return (
    <div>
      <ul>
      <ul style={{ listStyleType:'decimal'}}>
        <li>All Too Well</li>
        <li>Forever & Always</li>
        <li>London Boy</li>
        <li>Out of the Woods</li>
      </ul>  
       
      </ul>
    </div>
  )
}


export default sidePanel
