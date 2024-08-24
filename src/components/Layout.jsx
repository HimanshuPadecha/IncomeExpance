import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout
