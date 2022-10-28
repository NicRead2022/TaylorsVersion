import React from "react"
import axios from 'axios'
import { useState } from "react"


// class SongTitle extends React.Component {

//   state = 

function SongTitle(){
  const [state, setState] = useState({
        name: '',
        boyfriend:'',})
  const handleUpdate = async (req, res) => {
    try {
        const songs = await songs.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(songs)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const handleDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await songs.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Song deleted");
        }
        throw new Error("Song not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const handleBoyfriendChange = event => {
  this.setState({ boyfriend: event.target.value });
}
const handleNameChange = event => {
  this.setState({ name: event.target.value });
}
return(
  <div>
    <input type="text" name="name" placeholder={this.props.name} onChange={this.handleNameChange}/>
    <input type="text" name="boyfriend" placeholder= {this.props.boyfriend} onChange={this.handleBoyfriendChange}/>
    <button onClick={this.handleUpdate}>update</button>
    <button onClick={this.handleDelete}>delete</button>
    
  </div>
)




}

    
// const handleUpdate = () =>{

// }
// const handleDelete = () =>{
//   axios.delete(
//     `https://127.0.0.1:27017/taylorDatabase`, { name: this.props.name })
//      .then(res => {
//        console.log(res);
//        console.log(res.data);
//    })
// }


// render()
  


export default SongTitle


