import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <p>현대카드 무이자이벤트중</p>
      {children}
    </div>
  )
}
