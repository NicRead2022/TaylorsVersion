import { useState, useEffect } from 'react'
import axios from 'axios'
import App from 'App'
import { Link } from 'react-router-dom'


const Home = () => {
  const [songs, Songs] = useState(null)
  const  = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/main')
      Songs(response.data.songs)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getRests()
  }, [])
  const onClick = () => {}
  return (
    <div className='song-info'>
      {songs?.map((rest, index) => (
        <Link key={songs._id} to={`/songs/${songs._id}`}>
          <SongTitle
            key={songs._id}
            onClick={onClick}
            name={name?.song}
            description={description?.song}
            image={songs?.image}
            
            city={rest?.city}
          />
        </Link>
      ))}
    </div>
  )
}
export default Home