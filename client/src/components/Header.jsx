import React from 'react'
import { Link } from 'react-router-dom'


const InfoHeader = () => {

  return (
    <header>
      <nav>
       <Link to="/songs">Songs</Link>
       <Link to="/createSong">Contribute</Link>
      </nav>
    </header>
  )


export default Header
