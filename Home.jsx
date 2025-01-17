import { Component, useState } from "react";
import "./in.css";
import Login from "./Login";

function Home(){
    const[notes,setnotes]=useState([]);
    function add(){
        setnotes([...notes,{ id:notes.length}]);
    }
    function deleteNote(id){
        setnotes(notes.filter((note)=>(note.id!=id)));
    }
    return <div className="division"> 
        <h1 className="h1">Attendence Calculator</h1>
        <button onClick={add} className="b1">Add Subject</button>
        {notes.map((note)=>(<Login
        id={note.id}
        
        />))}     
    </div>
}
export default Home;