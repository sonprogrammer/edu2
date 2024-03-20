import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import Comment from './comment'

export default async function Detail(props) {

    const client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.any) })
  console.log(props)

  return (
    <div>
      <h3>detail page</h3>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
        <Comment _id={result._id}/>
    </div>
  )
} 
