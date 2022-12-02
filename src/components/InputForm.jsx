import * as React from 'react';
import { useState,useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

const InputForm = () => {
  
  const [title, setTitle] = useState()
  const [description,setDescription] = useState()
  // const [titleValue, setTitleValue] = useState()
  // const [descriptionValue, setDescriptionValue] = useState()
  const Object = {
    title:title,
    description:description
  }
  const [post,setPost] = useState([])
  useEffect(() => {
   
  });

  const handleChange = (event) =>{
    event.preventDefault()
setTitle(event.target.value)

console.log(event.target.value)

  }

  const onChangeDescriptionHandler =(event)=>{
    event.preventDefault()
    setDescription(event.target.value)
   console.log(event.target.value)
  }
  const onUploadHandler = () => {
    // setTitleValue(title)
    // setDescriptionValue(description)
    setPost(Object)
    fetch('https://hyp-introduction-default-rtdb.firebaseio.com/post.json', {
      method: 'POST',
      body: JSON.stringify({
        postData:post,
        // description:descriptionValue,
    
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })
      // .then(function(response){ 
      //   return response.json()})
      //   .then(function(data)
      //   {console.log(data)
        
      // }).catch(error => console.error('Error:', error)); 
      setTitle('')
      setDescription('')
  }
  return (
    <Card style={{
      
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
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Enter your title..."
        variant="filled"
        size="small"
        style={{ background: '#fff', paddingLeft:20, paddingRight:20, width:'450px'}}
        onChange={handleChange}
        value={title}
      />
      <div  style={{paddingLeft:20, paddingRight:20}}>
      <h4 style={{textAlign:'start', paddingLeft:10}}>Description</h4>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={8}
        placeholder="Enter your description..."
       style={{width: "100%"}}
        onChange={onChangeDescriptionHandler}
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
