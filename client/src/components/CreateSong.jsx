import React from 'react';
import axios from 'axios';


export default class CreateSong extends React.Component {
   state = {
     name: '',
     description:'',
     image: '',
     boyfriend:'',
   }
   handleNameChange = event => {
     this.setState({ name: event.target.value });
   }
   handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  }
  handleImageChange = event => {
    this.setState({ image: event.target.value });
  }
  handleBoyfriendChange = event => {
    this.setState({ boyfriend: event.target.value });
  }
   handleSubmit = event => {
     event.preventDefault();
       const post = {
         name: this.state.name,
         description: this.state.description,
         image: this.state.image,
         boyfriend: this.state.boyfriend,
       };
     axios.post(
      `http://localhost:3001/api/song`, post)
       .then(res => {
         console.log(res);
         console.log(res.data);
     }) 
     }
    render() {
         return (
         <div>
           <form onSubmit={this.handleSubmit}>
             <label>
               Post Name:
               <input type="text" name="name" onChange={this.handleNameChange} />
               <input type="text" name="description" onChange={this.handleDescriptionChange}/>
               <input type="text" name="image" onChange={this.handleImageChange}/>
               <input type="text" name="boyfriend" onChange={this.handleBoyfriendChange}/>

               
             </label>
             <button type="submit">Add</button>
          </form>
        </div>
 )}}




