import React from 'react'

const Read = (props: any) => {
  return (
    <div>
      <h2>Read [id]</h2>
      parameter : {props.params.id}
    </div>
  )
}

export default Read
