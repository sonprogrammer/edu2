import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';



export default function Home() {
  let name = 'son'
  let link = 'http://www.naver.com'
  
  return (
    <div>

        <h1 className="title">Apple </h1>
        <p className="sub">by dev {name}</p>
    </div>
  );
}
