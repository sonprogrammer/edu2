import React from 'react'

const Layout = (props : any) => {
  return (
    <form>
        <h2>create layout</h2>
        {props.children}
    </form>
  )
}

export default Layout
