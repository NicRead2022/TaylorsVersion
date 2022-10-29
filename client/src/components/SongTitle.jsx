import React from "react"
import axios from 'axios'
import { useState } from "react"


function SongTitle() {
 [state, setState] = useState({
  
    name: '',
    boyfriend:'',})

const handleUpdate = () =>{

}
const handleDelete = (songId) =>{
  axios.delete(
    `http://localhost:3001/api/song/${songId}`, {id: this.props.id })
     .then(res => {
       console.log(res);
       console.log(res.data);
   })
  
}
const handleBoyfriendChange = event => {
  this.setState({ boyfriend: event.target.value });
}
const handleNameChange = event => {
  this.setState({ name: event.target.value });
}



  return(
    <div>
      <input type="text" name="name" placeholder={props.name} onChange={handleNameChange}/>
      <input type="text" name="boyfriend" placeholder= {props.boyfriend} onChange={handleBoyfriendChange}/>
      <button onClick={props.updateSong}>update</button>
      <button onClick={()=> {handleDelete(props.id)}}>delete</button>
      
    </div>
  )

}

export default SongTitle


