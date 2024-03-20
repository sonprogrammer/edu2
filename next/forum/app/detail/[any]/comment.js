'use client'

import { useEffect, useState } from "react"
import { render } from "react-dom"

export default function Comment({_id}) {
    const [comment, setComment] = useState('')
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/api/comment/list?id='+_id).then(r => r.json())
            .then((result) => {
                setData(result) 
            })
    },[])
    
  return (
    <div>
      <div>댓글목록 보여주는 부분</div>
      {
        data.length > 0 ?
        data.map((a, i) =>{
            return(
                <p key={i}>{a.content}</p>
            )
        }) : '로딩중'
      }
      <input onChange={(e)=>{ setComment(e.target.value) }}/>
      <button onClick={()=>{
        fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({comment : comment , _id: _id})
      })}}>등록</button>
    </div>
  )
}
