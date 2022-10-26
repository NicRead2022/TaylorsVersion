import React from 'react';
import axios from 'axios';


export default class AddPost extends React.Component {
   state = {
     postTitle: '',
   }
   handleChange = event => {
     this.setState({ postTitle: event.target.value });
   }
   handleSubmit = event => {
     event.preventDefault();
       const post = {
         postName: this.state.postName
       };
     axios.post(
`https://jsonplaceholder.typicode.com/posts`, { post })
       .then(res => {
         console.log(res);
         console.log(res.data);
     })
     [Text Wrapping Break] 
     }
    render() {
         return (
         <div>
           <form onSubmit="{this.handleSubmit}">
             <label>
               Post Name:
               <input type="text" name="name" 
                     onChange="{this.handleChange}" />
             </label>
             <button type="submit">Add</button>
          </form>
        </div>
 )}}