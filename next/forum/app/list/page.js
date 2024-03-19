import { connectDB } from '@/util/database'
import Link from 'next/link'
import React from 'react'
import DetailLink from './DetailLink'

export default async function List() {
  const client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div className='list-bg'>
      {result.map((a, i) => (
        <div className='list-item' key={i}>
          <Link href={`/detail/${result[i]._id}`} className='link'><h4>{result[i].title}</h4></Link>
          <Link href={`/edit/${result[i]._id}`}>✏️</Link>
          <p>19 of march</p>
        </div>
      ))}
    </div>
  )
}
