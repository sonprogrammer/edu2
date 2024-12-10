import { connectDB } from "@/util/database";

export default async function register(req, res) {
  console.log("req", req.body);
  const client = await connectDB;
  const db = client.db("forum");
  let has = await db.collection("user").findOne({ email: req.body.email });
  
  
  if(has){
      return res.status(400).json('it already exists')
    }else{
        let result = await db.collection("user").insertOne(req.body);
        return res.redirect(302, '/list')
    }

}
