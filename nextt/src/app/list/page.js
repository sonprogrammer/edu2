import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

const page = async () => {
  const client = await connectDB;
  const db = client.db("forum");
  let res = await db.collection("post").find().toArray();
  console.log(res);

  return (
    <div className="list-bg">
      {res.map((r, i) => (
        <div className="list-item">
          <h4>{r.title}</h4>
          <Link href={`/detail/${r._id}`}>link</Link>
          <DetailLink />
          <p>{r.content}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
