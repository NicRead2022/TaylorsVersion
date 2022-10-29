//create functional componente Updatesong 
//axios get request to get songby id
//console.log(res.data)

handleDelete = (songId) =>{
  axios.delete(
    `http://localhost:3001/api/song/${songId}`, {id: this.props.id })
     .then(res => {
       console.log(res);
       console.log(res.data);
   })
  
}