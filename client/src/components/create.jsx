import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   songTitle: "",
   album: "",
   boyfriend: "",
 });
 const navigate = useNavigate();
 
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 
 async function onSubmit(e) {
   e.preventDefault();
 
   
   const newBoyfriend = { ...form };
 
   await fetch("****", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ songTitle: "", album: "", boyfriend: "" });
   navigate("/");
 }
 
 
 return (
   <div>
     <h3>Create New Submission</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="song title">song</label>
         <input
           type="text"
           className="form-control"
           id="song"
           value={form.song}
           onChange={(e) => updateForm({ song: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="album">album</label>
         <input
           type="text"
           className="form-control"
           id="album"
           value={form.album}
           onChange={(e) => updateForm({ album: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="boyfriend">album</label>
         <input
           type="text"
           className="form-control"
           id="boyfriend"
           value={form.boyfriend}
           onChange={(e) => updateForm({ boyfriend: e.target.value })}
         /> 
       </div>
     </form>
   </div>
 );
}