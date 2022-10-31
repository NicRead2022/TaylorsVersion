import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header>
      <h1 style={{color:"Blue"}}>
      <div>
     <nav>
       <Link to="/songs">Songs</Link>
       <Link to="/CreateSong">Contribute</Link>
     </nav>
      </div>
      </h1>
    </header>
  )
}
export default Header