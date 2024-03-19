import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Edit(props) {
  const client = await connectDB
  const db = client.db('forum')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

    await db
    .collection('post')
    .updateOne({},{$set: {title: 'hello'}})

  return (
    <div>
      <div className='p-20'>
        <h4>edit page</h4>
        <form action='/api/post/new' method='POST'>
          <input type='text' name='title' value={result.title} />
          <input name='content' value={result.content} />
          <button type='submit'>button</button>
        </form>
      </div>
    </div>
  )
}
