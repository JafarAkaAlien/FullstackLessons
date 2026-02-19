import React, { useEffect, useState } from 'react'

const App = () => {

  const [api_data, getApi] = useState([])
  useEffect(()=>{
    fetch("https://birmarket.free.beeceptor.com/todos")
    .then(res=>res.json())
    .then(data=>console.log(data))
    
  },[])

  return (
    <div></div>
  )
}

export default App