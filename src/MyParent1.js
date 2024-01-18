import React, { useState } from 'react'
import MyChild1 from './MyChild1';

export default function MyParent1() {

  console.log("this is parent")

  const [data,setData]= useState([]);

  const [input,setInput]= useState('');

  const display = ()=>{

    let d = [...data];
    d.push(input);
    setData(d);
   
  }

  const d= React.useCallback(()=>{

  },[])

  const handleChange = (e)=>{

    setInput(e.target.value);

  }

  return (
    <div>
      <input type='text' name="firstName" 
      onChange={handleChange}/>
      <button onClick={display}>D</button>
      
      <MyChild1 p={d}/>
    </div>
  )
}


  
