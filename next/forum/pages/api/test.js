import { connectDB } from "@/util/database"

export default async function handler(req, res){
    if(req.method === 'POST'){
        return res.status(200).json('success')
    }
    if(req.method === 'GET'){
        const client = await connectDB
        const db = client.db('forum')
        let result = await db.collection('post').find().toArray()
        return res.status(200).json(result)
    }
    
}