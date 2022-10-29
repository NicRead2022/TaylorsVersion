import React from 'react';
import axios from 'axios';


function CreateSong() {
  [state, setState] = useState({ 
     name: '',
     description:'',
     image: '',
     boyfriend:'',
   })
   const handleNameChange = event => {
     this.setState({ name: event.target.value });
   }
   const handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  }
  const handleImageChange = event => {
    this.setState({ image: event.target.value });
  }
  const handleBoyfriendChange = event => {
    this.setState({ boyfriend: event.target.value });
  }
   const handleSubmit = event => {
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
         return (
         <div>
           <form onSubmit={this.handleSubmit}>
             <label>
               Post Name:
               <input type="text" name="name" onChange={handleNameChange} />
               <input type="text" name="description" onChange={handleDescriptionChange}/>
               <input type="text" name="image" onChange={handleImageChange}/>
               <input type="text" name="boyfriend" onChange={handleBoyfriendChange}/>

               
             </label>
             <button type="submit">Add</button>
          </form>
        </div>
 )}


 export default CreateSong

