import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){

    const client = await connectDB
    const db = await client.db('forum')
    let result = await db.collection('comment')
        .find({ parent : new ObjectId(req.query.id) }).toArray()
    res.status(200).json(result)
}