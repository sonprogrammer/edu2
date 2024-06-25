import Link from "next/link";
import style from './trend.module.css';
export default function Trend() {
  return (
    <Link href={`/search?q=트렌d드`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>youngjinSon</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  )
}