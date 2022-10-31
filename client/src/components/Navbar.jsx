import React from 'react'
import { Link } from 'react-router-dom'





const Navbar = () => {

  return (
    <header>
      <nav>
       <Link className="input" to="/songs">Songs</Link>
       <Link className="input" to="/createSong">Contribute a Song</Link>
      </nav>
    </header>
  )
}

export default Navbar
