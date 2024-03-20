'use client'

import { useState } from "react"

export default function Write() {
  let [src, setSrc] = useState('')
  return (
    <div className='p-20'>
      <h4>write</h4>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='title' />
        <input name='content' placeholder='content' />
        <input
          type='file'
          accept='image/*'
          onChange={async (e) => {
            let file = e.target.files[0]
            let filename = encodeURIComponent(file.name) //한글 파일 깨질수도있으니깐
            let res = await fetch('/api/post/image?file=' + filename)
            res = await res.json()
            console.log(res)

            //S3 업로드
            const formData = new FormData()
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value)
            })
            let 업로드결과 = await fetch(res.url, {
              method: 'POST',
              body: formData,
            })
            console.log(업로드결과)

            if (업로드결과.ok) {
              setSrc(업로드결과.url + '/' + filename)
            } else {
              console.log('실패')
            }
          }}
        />
        <img src={src} alt='' />
        <button type='submit'>button</button>
      </form>
    </div>
  )
}
