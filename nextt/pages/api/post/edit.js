import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function edit(req, res) {
    console.log('req.body', req.body);
    if(req.method === "POST") {

        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("post").updateOne(
          {_id: new ObjectId(req.body._id)}, 
          {$set: {title: req.body.title, content: req.body.content}}
      
          );
          res.redirect(302, '/list')

    }


}
