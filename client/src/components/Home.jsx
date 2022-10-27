import { useState, useEffect } from 'react'
import axios from 'axios'
import App from 'App'
import { Link } from 'react-router-dom'
import songs from 'songs'


const Home = () => {
  const [songs, setSongs] = useState(null)
  const getSongs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/main')
      setSongs(response.data.songs)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getSongs()
  }, [])
  const onClick = () => {}
  return (
    <div className='song-info'>
      {songs?.map((song, index) => (
        <SongTitle
            key={song._id}
            onClick={onClick}
            name={song.name}
            description={song.description}
            image={song.image}
            boyfriend={song.boyfriend}
            />
        
      ))}
    </div>
  )
}
export default Home