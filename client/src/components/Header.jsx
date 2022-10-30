import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <div>
      <nav>
       <Link to="/songs">Songs</Link>
       <Link to="/CreateSong">Contribute</Link>
      </nav>
      </div>
    </header>
  )
}
export default Header