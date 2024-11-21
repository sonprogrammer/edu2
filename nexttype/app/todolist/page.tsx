import React from 'react'

const page = () => {
  return (
    <div className='h-full flex justify-center items-center'>
      <div>
        <h1>todoList</h1>
        <input placeholder='write...' />
        <button>+</button>
      </div>
      <div>
        <input type="text" placeholder='type here...'/>
      </div>
    </div>
  )
}

export default page
