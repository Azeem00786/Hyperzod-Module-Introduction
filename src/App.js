

import './App.css';
import  {GetData}  from './components/GetData.jsx';
import InputForm from './components/InputForm.jsx';
function App() {
  return (
    <div className="App">
         <h1 style={{alignItems:'flex-start' , textAlign:'start',paddingTop:50}}>Add your post</h1>  
       
      <InputForm/>
      
      <GetData/>
    </div>
  );
}

export default App;
