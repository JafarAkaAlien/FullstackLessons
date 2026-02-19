import React from 'react'
import Card from '../../components/Card/Card'
import "./Home.css"


const Home = (props) => {




    return (
        <main>
            <Card data={props.data}/>
        </main>
    )
}

export default Home