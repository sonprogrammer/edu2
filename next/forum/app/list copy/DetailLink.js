'use client'

import { useRouter } from "next/navigation"

export default function DetailLink() {
    const router = useRouter()
    
  return (
    <div>
      <button onClick={()=>{ router.push('/')}}>button</button>
    </div>
  )
}
