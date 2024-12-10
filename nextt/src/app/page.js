import { connectDB } from "@/util/database";
import Logoin from "./Logoin";

export default async function Home() {

  const client = await connectDB
  const db =client.db('forum')
  let res = await db.collection('post').find().toArray();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Logoin />

    </div>
  );
}
