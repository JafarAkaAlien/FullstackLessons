import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import CallApi from "../../Repository/API/Api.jsx"
import Header from '../Header/Header.jsx'

const Layout = () => {








  return (
    <>
      <CallApi  >

        <Header />
        <Outlet />
      </CallApi>
    </>
  )
}

export default Layout