import React from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes >
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='/misqa' element={<About/>}/>
              <Route path='/malades' element={<Contact/>}/>
            </Route>
        </Routes>

      </BrowserRouter>
    
    
  )
}

export default App