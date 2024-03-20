import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    let session = await getServerSession(req, res, authOptions) 
    //현재 로그인된 유저정보가 남음
    
    if(req.method == 'POST'){
        console.log(req.body) // {"comment":"dfdfd","_id":"65f92a2014ec6bc522426989"}
        req.body = JSON.parse(req.body)
        console.log(req.body) // { comment: 'dfdfdfdfd', _id: '65f92a2014ec6bc522426989' }
        let store = {
            content : req.body.comment, // 유저가 작성한 댓글
            parent: ObjectId(req.body._id), //부모 게시물 _id
            author: session.email   //user email
        }
        
        let client = await connectDB
        let db = await client.db('forum')
        let result = await db.collection('comment').insertOne(store)
        res.status(200).json('success')
    }
}