import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  if (req.method === 'DELETE') {

    const client = await connectDB
    const db = client.db('forum')
    let find = await db
      .collection('post')
      .findOne({ _id: new ObjectId(req.body) })
      console.log('find',find)

    if (find.author === session.user.email) {
      let result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(req.body) })
       res.status(200).json('success')
    } else {
       res.status(500).json('error')
    }
  }
}
