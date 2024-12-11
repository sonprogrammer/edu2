import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

const EditPage = async (props) => {

  const client = await connectDB;
  const db = client.db("forum");
  let res = await db.collection("post").findOne({ _id : new ObjectId(props.params.id)})

  await db.collection("post").updateOne({_id: new ObjectId(props.params.id)}, {
    $set: {title: '', content: ''}
  })

  console.log('pro', props)
  return (
    <div>
        <h4>수정페이지</h4>
        <form action='/api/post/edit' method='POST'>
          <input name='title' placeholder={res.title} defaultValue={res.title}/>
          <input name='content' placeholder={res.content} defaultValue={res.content}/>
          <input name='_id' value={res._id.toString()} style={{display:'none'}}/>
          <button type='submit'>button</button>
        </form>
    </div>
  )
}

export default EditPage
