import * as React from 'react';
import { useState,useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import db from '../firebase.js'
const InputForm = () => {
  
  const [title, setTitle] = useState()
  const [description,setDescription] = useState()
  // const Object = {
  //   title:title,
  //   description:description
  // }
  // const [post,setPost] = useState([])
  // useEffect(() => {
   
  // });

//   const handleChange = (event) =>{
//     event.preventDefault()
// setTitle(event.target.value)

// console.log(event.target.value)

//   }

  // const onChangeDescriptionHandler =(event)=>{
  //   event.preventDefault()
  //   setDescription(event.target.value)
  //  console.log(event.target.value)
  // }
  const onUploadHandler = () => {
    db.collection("data").add({
      title: title,
      description: description,
      
  })
  .then((docRef) => {
      alert("Data Successfully Submitted");
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
    
  }
  return (
    <Card style={{
      // backgroundImage: "url()",
      boxShadow: '.5px 1px 5px #959DA5',
      width: 'auto',
    height: '100%'
    }}>
     
      <h4 style={{textAlign:'start', paddingLeft:20}}>Title</h4>
    <Stack
      component="form"
      sx={{
        // width: '50ch', 
       
      }}
      spacing={5}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-hidden-label-small"
        placeholder="Enter your title..."
        variant="filled"
        size="small"
        style={{ backgroundColor:'#fff', paddingLeft:20, paddingRight:20, width:'97%'}}
        onChange={(e)=>{setTitle(e.target.value)}}
        value={title}
      />
      <div  style={{paddingLeft:20, paddingRight:20}}>
      <h4 style={{textAlign:'start', paddingLeft:10}}>Description</h4>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={8}
        placeholder="Enter your description..."
       style={{width: "100%", backgroundColor:'#F5F5F5', borderColor:'#FCFCFC',}}
       onChange={(e)=>{setDescription(e.target.value)}}
        value={description}
      />
      </div>
      <div style={{
            marginTop:30,
           marginBottom:20,
            color: 'white',
            textAlign:'start',
            marginLeft:20
          }}>
        <Button
          variant="contained"
          style={{
            marginRight:50,
          }}
          onClick={onUploadHandler}>UPLOAD</Button>
        <Button variant="outlined">SEE ALL...</Button>
      </div>
    </Stack>
    </Card>
   
  );
}
export default InputForm;
