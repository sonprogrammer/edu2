

import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { useParams } from 'next/navigation';
import React from 'react'

const Detail = async (props) => {
  
  const client = await connectDB;
  const db = client.db("forum");
  let res = await db.collection("post").findOne({_id : new ObjectId(props.params.id)})
  console.log('res', props)
  
  
  return (
    <div>
      <h4>상세페이지</h4>
      {res.title}
      <p>{res.content}</p>
    </div>
  )
}

export default Detail
 