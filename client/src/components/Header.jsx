import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <nav>
       <Link to="/songs">Songs</Link>
       <Link to="/CreateSong">Contribute</Link>
      </nav>
    </header>
  )
}
export default Header