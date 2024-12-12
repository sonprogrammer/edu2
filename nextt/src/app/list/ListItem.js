'use client'

import Link from 'next/link'
import React from 'react'

const ListItem = ({res}) => {
  return (
    <div>
      {res.map((r, i) => (
        <div className="list-item" key={i}>
          <h4>{r.title}</h4>
          <Link href={`/detail/${r._id}`}>link</Link>
          <Link href={`/edit/${r._id}`}>수정</Link>
          <span onClick={() => {
            fetch('/api/post/delete', {
                method: 'DELETE', 
                body: r._id
            })
                .then(() => {
                    console.log('delete')
                })
                .then((a) => {
                    return a.json()
                    
                })
                .then((a) => {
                    console.log(a)
                })
          }}>
            삭제
          </span>
          
        </div>
      ))}
    </div>
  )
}

export default ListItem
