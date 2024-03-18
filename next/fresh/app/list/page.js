'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function List() {
  const [count, setCount] = useState([0, 10, 0])
  const items = ['tomato', 'pasta', 'coconuts']

  const handlClick = (i) => {
    let copy = [...count]
    copy[i]++
    setCount(copy)
  }

  return (
    <div>
      <h4 className='title'>items</h4>
    <div className="box">
      {items.map((item, i) => (
        <div className='food' key={i}>
          <h4>{item} $30 </h4>
          <img
            className='food-img'
            src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`}
            alt={item}
          />
          <span> {count[i]} </span>
          <button
            onClick={() => {
              let copy = [...count]
              copy[i]++
              setCount(copy)
            }}>
            +
          </button>
          <button
            onClick={() => {
                let copy = [...count]
                copy[i]--
                setCount(copy)
            }}>
            -
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}
