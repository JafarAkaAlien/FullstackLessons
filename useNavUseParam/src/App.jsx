import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import { ApiProvider } from './Repository/ApiContext'

const App = () => {

  const [api_data, fetchApi] = useState([])

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => fetchApi(data.products));


  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<ApiProvider><Home /></ApiProvider>} />


          <Route path='/products/:id' element={<ApiProvider><Detail API={api_data} /></ApiProvider>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App