import React from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Route, Router} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router >
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />

            
            </Route>
        </Router>

      </BrowserRouter>
    
    </>
  )
}

export default App