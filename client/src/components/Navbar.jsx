import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  return (
    <header>
      <nav>
       <Link to="/songs">Songs</Link>
       <Link to="/createSong">Contribute</Link>
      </nav>
    </header>
  )
}

export default Navbar
