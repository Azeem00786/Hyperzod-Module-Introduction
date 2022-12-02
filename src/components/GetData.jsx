import React from 'react'
import { useState, useEffect} from 'react';
export const GetData = () => {

//   fetch('https://hyp-introduction-default-rtdb.firebaseio.com/post.json')
// .then(x => x.text())
// .then(data => console.log(JSON.parse(data.title)));
const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchmeals = async () => {
    let fethedData= 'helo'
fetch('https://hyp-introduction-default-rtdb.firebaseio.com/post.json')
.then(x => x.text())
.then(data =>console.log(JSON.parse(data)));
console.log(fethedData);
  }
  useEffect(() => {
      fetchmeals().catch((er)=>{
        setIsLoading(false);
        setHttpError(er)
      });
  
  }, []);

  
  // const mealList = meals.map()
  return (

    <section>
      
        {/* <ul>{mealList}</ul> */}
     
    </section>
  )
}
