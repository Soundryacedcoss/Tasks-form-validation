import React, { useState } from 'react'

export default function Name() {
  const [name,setName]=useState("")
  const nameHandler=(e)=>{
   var name=e.target.value;
   setName(name)
  console.log(name);
  }
  return (
    <>
    <input type="text" onChange={nameHandler} />
    </>
  )
}
