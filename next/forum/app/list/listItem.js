'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result}) {
return (
    <div>
      {result.map((a, i) => (
        <div className='list-item' key={i}>
          <Link href={`/detail/${result[i]._id}`} className='link'>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={`/edit/${result[i]._id}`}>✏️</Link>
          <span onClick={()=>{
            fetch('/api/post/delete', {method: 'DELETE', body: result[i]._id})
          }}> 🗑️ </span>
          <p>19 of march</p>
        </div>
      ))}
    </div>
  )
}
