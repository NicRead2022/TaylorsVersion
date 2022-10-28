import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SongTitle from './SongTitle'


const Home = () => {
  const [songs, setSongs] = useState([])
  const getSongs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/songs')
      console.log(response)
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
      {songs?.map((song) => (
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