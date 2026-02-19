import React, { useContext } from 'react'
import CallApi, { API_INSTANCE } from '../../Repository/API/Api';
import Card from '../../components/Card/Card';
import "./Home.css"

const Home = () => {

  let api_data = useContext(API_INSTANCE)
  console.log("Homedaki data: ", api_data);

  if (api_data.length == 0) {
    return <h1>Loading</h1>
  }
  else {
    console.log("Here we go from home to main");
    
    return (
      <main>
        <Card data={api_data} />
      </main>
    )
  }

}

export default Home