import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

const page = async () => {
  const client = await connectDB;
  const db = client.db("forum");
  let res = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {res.map((r, i) => (
        <div className="list-item">
          <h4>{r.title}</h4>
          <Link href={`/detail/${r._id}`}>link</Link>
          <Link href={`/edit/${r._id}`}>수정</Link>

          <p>{r.content}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
