import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Edit(props) {
  const client = await connectDB
  const db = client.db('forum')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div>
      <div className='p-20'>
        <h4>edit page</h4>
        <form action='/api/post/edit' method='POST'>
          <input type='text' name='title' defaultValue={result.title} />
          <input name='content' defaultValue={result.content} />
          <input style={{display: 'none'}} name='_id' value={result._id.toString()} />
          <button type='submit'>button</button>
        </form>
      </div>
    </div>
  )
}
