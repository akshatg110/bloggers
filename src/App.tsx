import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
//import navbar from './components/navbar';
import india from './components/Post';
import Product from './components/Product';
let array=[
  {name: 'Akshat Goyal', story:'Good boy '},
  {name: 'Daksh Garg', story:'Bad Boy'},
];

function App() {
  const [name,setName] = useState("");
  //let [array, setarray] = useState([])
const [description,setdescription] = useState("");

function refreshPage() {
  window.location.reload(false);
}
 const onSubmit = () =>{
    let obj={
        name:name,
        story:description
    }
    array.push(obj);
    refreshPage();
    
      
  }
  
  return (
    <div>
    <Post array={array} />
    <div className="card">
    <form action="#">
      <p>Enter Name</p>
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} />
      <p>Enter Description</p>
      <input type="text" placeholder="Description'" id="description" onChange={(e)=> setdescription(e.target.value)} value={description} />
      <br />
      <Button className="button" onClick={onSubmit}>Submit</Button>
    </form>
    
    </div>
    
    </div>
    
  );
}

export default App;
