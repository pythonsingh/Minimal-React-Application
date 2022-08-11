import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabar from './Navbar'

function Layout() {
  return (
      <>
      <Nabar/>
      <Outlet />
      </>
  )
}

export default Layout