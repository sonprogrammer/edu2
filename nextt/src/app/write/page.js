import React from 'react'

const WritePage = () => {
  return (
    <div>
      <h2>글작성</h2>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='title'/>
        <input name='content' placeholder='content'/>
        <button type='submit'>button</button> 
      </form>
    </div>
  )
}

export default WritePage
