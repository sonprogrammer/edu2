import React from 'react'
import { AddProblemComponent, NavbarComponent } from '../../components'
import { Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <NavbarComponent />
        <AddProblemComponent />
        <Outlet />
    </div>
  )
}
