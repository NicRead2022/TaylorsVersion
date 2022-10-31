import React from "react"
import axios from 'axios'
import { useState } from "react"
import { handleUpdate} from './UpdateSong'


function SongTitle(props) {
const[state, setState] = useState({
  
    name: '',
    boyfriend:'',})

const handleDelete = (songId) =>{
  axios.delete(
    `http://localhost:3001/api/song/${songId}`, {id: props.id })
     .then(res => {
       console.log(res);
       console.log(res.data);
   })
  
}
const handleBoyfriendChange = event => {
  setState({ boyfriend: event.target.value });
}
const handleNameChange = event => {
  setState({ name: event.target.value });
}



  return(
    <div>
      <input className="input" type="text" name="name" placeholder={props.name} onChange={handleNameChange}/>
      <input className="input" type="text" name="boyfriend" placeholder= {props.boyfriend} onChange={handleBoyfriendChange}/>
      <button onClick={()=> {handleUpdate(props.id,state.name,state.boyfriend)}}>update</button>
      <button onClick={()=> {handleDelete(props.id)}}>delete</button>
      
    </div>
  )

}

export default SongTitle


