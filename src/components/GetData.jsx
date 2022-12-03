import React from 'react'
import db from '../firebase.js';
import { useState} from 'react';
import  Card  from './Card.jsx';
import TextField from "@mui/material/TextField";


export const GetData = () => {

  const [info , setInfo] = useState([]);
 
  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("data").get().then((querySnapshot) => {
          
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [...arr , data]);
               console.log(data)
          });
      })
  }
   
  // Display the result on the page
  return (
      <div>
        <div style={{textAlign:'end', paddingBottom:30}}>
        <button style={{  
          padding: '10px 40px', 
          backgroundColor:'#ffffff', 
          borderColor:'#0071E3',
          borderRadius:56,
          borderWidth:2.9,
          color:'#0071E3',
          fontSize:19
          }}>Add New</button>
        </div>
          <div style={{paddingBottom:40,}}>
          
          <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          sx={{"& .MuiOutlinedInput-root.Mui-disabled":{"& > fieldset": {border: '1px solid green'}}}}
          contentpadding='EdgeInsets.symmetric(vertical: 80)'
          label={
            <div>
             Search...
              
            </div>
          }
          
          style={{backgroundColor:'#F2F2F2'}}

        />
        </div>
       
      {
          info.map((data) => (
            <Card style={{}}>
          <div style={{paddingLeft:10, textAlign:'start', marginTop:5}}>
                <h3 style={{paddingTop:22}}>{data.title}</h3> 
                 </div>
                 <div style={{paddingLeft:10, textAlign:'start', marginTop:5, marginBottom:45}}>
           <h5 style={{paddingBottom:22, color: '#717171'}}> {data.description}</h5> 
             </div>
            
                 </Card>
          ))
      }
      </div>

  );
}
