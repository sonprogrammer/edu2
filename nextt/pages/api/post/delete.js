import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// export default async function handler(req, res) {
//     if(req.method === 'DELETE') {

//         const client = await connectDB;
//         const db = client.db("forum");
//         let result = await db.collection("post").deleteOne({_id : new ObjectId(req.body)})
//         console.log('result', result);
//         return res.redirect(302, '/list')
//     }
// }
export default async function handler(req, res) {

    console.log('req.query', req.query)
    if(req.method === 'DELETE') {

        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("post").deleteOne({_id : new ObjectId(req.query.id)})
        console.log('result', result);
        return res.redirect(302, '/list')
    }
}