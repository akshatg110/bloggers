import { render } from '@testing-library/react';
import React,{useEffect} from 'react';
import {Button} from 'react-bootstrap';
import { isBindingName } from 'typescript';
import '../App.css';
import Product from './Product';
import {useQuery,gql} from '@apollo/client';
const items = gql`
    {
        hello {
          id
          name
          description
        }
      }
`;


function Post() {
    const {loading,error,data} = useQuery(items);
    //const array = props.array;
    //console.log("akshat")
    console.log(data);
    if(loading) return <p>Loading</p>
    if(error) return <p>Error :</p>;
   return data["hello"].map((items:any,idx:any) =>{
       return(
       <div>
           <p>
               {/* kjfhu */}
               <Product items={items}/>
            </p>
       </div>
       )
   });
    
}

export default Post
