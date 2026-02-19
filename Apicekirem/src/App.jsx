import react, { useEffect, useState }  from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  // const [count, setCount] = useState(0)

  const [api_data, SetApi] = useState([])


  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => { SetApi(data.products) });


    console.warn(api_data);


  }, [])

  console.log(api_data);

  return (
    <>
      <Home data={api_data}/>
    </>
  )
}

export default App
