

import axios from "axios";

export const handleUpdate = (songId, song, boyfriend) =>{
  let post={
     name: song, 
     boyfriend: boyfriend
  }
  console.log(post)
  axios.post(
    `http://localhost:3001/api/song/${songId}`, post)
     .then(res => {
       console.log(res);
       console.log(res.data);
   })
  
}
export default handleUpdate