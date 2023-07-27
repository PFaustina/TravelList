import React from 'react'
import { useState } from "react";


function Form ({onAddItems}) {

  const[description, setDiscription] = useState('')
  const[quantity, setQuantity] = useState(1)

  const handleSubmit =(e) => {
    //console.log(e)
    e.preventDefault();

    if(!description) return;

    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false
    }
  
    console.log(newItem)
    onAddItem(newItem)
    
    setDescription("")
    setQuantity(1)

  }

  const handleChange = (e) =>{
    //console.log(e.target.value)
    setDiscription(e.target.value)
  }

  const handleQuantityChange = (e) =>{
    setQuantity(Number(e.target.value))
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your trip? 💼</h3>
        <select value={quantity}onChange={handleQuantityChange}>

        {Array.from({length: 20}, (_, i)=>i +1).map((num) =>(
          <option value={num} key={num}> 
          {" "}
          {num} 
          {" "}
          </option>
        ))}

        </select>
        <input type= 'text' 
        placeholder='item...' 
        value={description}
        onChange={handleChange}
        />
        <button>Add</button>
    </form>
  )
}

export default Form