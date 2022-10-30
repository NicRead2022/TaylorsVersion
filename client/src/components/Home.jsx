import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SongTitle from './SongTitle'


const Home = () => {
  const [songs, setSongs] = useState([])
  const getSongs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/song')
      console.log(response)
      setSongs(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getSongs()
  }, [])
 
  return (
    <div className='song-info'>
      {songs?.map((song) => (
        <SongTitle
            key={song._id}
            name={song.name}
            description={song.description}
            image={song.image}
            boyfriend={song.boyfriend}
            id ={song._id}
            />
        
      ))}
    </div>
  )
}
export default Home