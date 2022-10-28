import React from "react"
import axios from 'axios'


class SongTitle extends React.Component {
 
  state = {
    name: '',
    boyfriend:'',}

handleUpdate = () =>{

}
handleDelete = (songId) =>{
  axios.delete(
    `http://localhost:3001/api/song/${songId}`, {id: this.props.id })
     .then(res => {
       console.log(res);
       console.log(res.data);
   })
  
}
handleBoyfriendChange = event => {
  this.setState({ boyfriend: event.target.value });
}
handleNameChange = event => {
  this.setState({ name: event.target.value });
}


render(){
  return(
    <div>
      <input type="text" name="name" placeholder={this.props.name} onChange={this.handleNameChange}/>
      <input type="text" name="boyfriend" placeholder= {this.props.boyfriend} onChange={this.handleBoyfriendChange}/>
      <button onClick={this.props.updateSong}>update</button>
      <button onClick={()=> {this.handleDelete(this.props.id)}}>delete</button>
      
    </div>
  )

}
}
export default SongTitle


