import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function CreateSong() {

   const [name, setName] = useState("")

   const [description, setDescription] = useState("")

   const [image, setImage] = useState("")

   const [boyfriend, setBoyfriend]=useState("")

   const handleNameChange = event => {
     setName(event.target.value );
   }
   const handleDescriptionChange = event => {
    setDescription(event.target.value );
  }
  const handleImageChange = event => {
    setImage(event.target.value );
  }
  const handleBoyfriendChange = event => {
    setBoyfriend(event.target.value );
  }
   const handleSubmit = event => {
     event.preventDefault();
       const post = {
         name: name,
         description: description,
         image: image,
         boyfriend: boyfriend,
       }
       console.log(post)
     axios.post(
      `http://localhost:3001/api/song`, post)
       .then(res => {
         console.log(res);
         console.log(res.data);
     }) 
     }
         return (
         <div>
           <form onSubmit={handleSubmit}>
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

