import React from "react"
import axios from 'axios'


class SongTitle extends React.Component {
 
  state = {
    name: '',
    boyfriend:'',}

handleUpdate = () =>{

}
handleDelete = () =>{
  axios.delete(
    `http://localhost:3001/api/song`, { data:{id: this.props.id }})
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
      <button onClick={this.handleUpdate}>update</button>
      <button onClick={this.handleDelete}>delete</button>
      
    </div>
  )

}
}
export default SongTitle


