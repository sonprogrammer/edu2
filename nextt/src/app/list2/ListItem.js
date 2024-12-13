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
          <span onClick={(e) => {
            // fetch('/api/post/delete', {
            //     method: 'DELETE', 
            //     body: r._id
            // }).then(() => {
            //   e.target.parentElement.style.opacity = 0;
            //   setTimeout(() => { 
            //     e.target.parentElement.style.display = 'none';
            //   }, 100);
            // })
            fetch(`/api/post/delete?id=${r._id}`,{
              method: 'DELETE'
            }).then(() => {
              console.log(r._id);
            })
            
          }}
          >
            삭제
          </span>
          
        </div>
      ))}
    </div>
  )
}

export default ListItem
