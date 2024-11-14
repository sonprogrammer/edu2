'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const List = () => {
  let items = ['tomatoes', 'pasta', 'coconut']
  let [count, setCount] = useState([0,0,0])
  return (
    <div>
      <h1 className='title'>list page</h1>
    
        {items.map((item, i) => (
            <div className='food' key={i}>
              <h4>{items[i]}</h4>
              <img src={`https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food${i}.png`} width={500} height={400}/>
              <span>{count[i]}</span>
              <button onClick={()=> {
                let copy = [...count]
                copy[i] = copy[i] + 1
                setCount(copy)
              }}>+</button>
            </div>
        ))}
    </div>
  )
}

export default List 
