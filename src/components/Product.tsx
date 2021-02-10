import React from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';


const Product = (props:any) => {
    // console.log(props);
    // console.log(props.items.name);
    // console.log("product");
    return (
        
        <div className="card">
       
  <div className="container">
       <p>{props.items.name}</p>
       
       <p>{props.items.description}</p>
  </div>

  
  <Button className="button" >Update</Button>
  <Button className="button">Delete</Button>
</div>
    )
}

export default Product
