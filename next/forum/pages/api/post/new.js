import { connectDB } from '@/util/database'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  console.log(session.user.email)

  if(session){
    req.body.author = session.user.email
  }
  console.log(req.body)

  if (req.method === 'POST') {
    console.log(req.body)
    if (req.body.title === '') {
      return res.status(500).json('there is nothing')
    }
    try {
        const client = await connectDB
        const db = client.db('forum')
        let result = await db.collection('post').insertOne(req.body)
        return res.status(200).redirect('/list')
    } catch (error) {
        alert('Error')
    }
  }
}
