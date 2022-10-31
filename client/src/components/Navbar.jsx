import React from 'react'
import { Link } from 'react-router-dom'





const Navbar = () => {

  return (
    <header>
      <nav>
       <Link className="inputsong" to="/songs">Songs</Link>
       <Link className="inputcreate" to="/createSong">Contribute a Song</Link>
      </nav>
    </header>
  )
}

export default Navbar
