import UseContext from 'react'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CallApi, { API_INSTANCE } from './Repository/API/Api'

const App = () => {

  // CallApi("call")

  return (
    <>
      {/* <CallApi> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
            </Route>


          </Routes>

        </BrowserRouter>
        
      {/* </CallApi> */}

    </>
  )
}

export default App