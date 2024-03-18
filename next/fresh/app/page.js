import Image from "next/image";
import styles from "./page.module.css";
import ResponseCache from "next/dist/server/response-cache";
import Link from "next/link";

export default function Home() {
  let name = 'son'

  return (
   <div>
    <h4 className="title">apple fresh</h4>
    <p className="content">by {name}</p>

   </div>
  );
}

