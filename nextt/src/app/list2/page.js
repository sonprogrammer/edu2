

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";


export const revalidate = 20;

const page = async () => {
  const client = await connectDB;
  const db = client.db("forum");
  let res = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem res={res}/>
    </div>
  );
};

export default page;
