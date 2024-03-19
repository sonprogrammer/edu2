import { connectDB } from '@/util/database'
import Link from 'next/link'
import React from 'react'
import DetailLink from './DetailLink'
import ListItem from './listItem'

export default async function List() {
  const client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div className='list-bg'>
      <ListItem result={result}/>
    </div>
  )
}
