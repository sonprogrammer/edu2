'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const DetailLink = () => {
    let router = useRouter()
    
  return (
    <div>
        <button onClick={() => {router.push('/')}}>button</button>
    </div>
  )
}

export default DetailLink
