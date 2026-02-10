import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>    
)
}

export default Layout