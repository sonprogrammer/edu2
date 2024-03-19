import { connectDB } from '@/util/database'
import React from 'react'

export default async function List() {
  const client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div className='list-bg'>
      {result.map((a, i) => (
        <div className='list-item' key={i}>
          <h4>{result[i].title}</h4>
          <p>19 of march</p>
        </div>
      ))}
    </div>
  )
}
