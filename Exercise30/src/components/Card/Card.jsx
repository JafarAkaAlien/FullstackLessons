import React, { useContext, useEffect, useState } from 'react'
import "./Card.css"
import { API_INSTANCE } from '../../Repository/API/Api'

const Card = (props) => {

    const [api_data, SetNewData] = useState([])
    let k = useContext(API_INSTANCE)

    useEffect(() => {


        SetNewData(k)

        console.log("We are here");

    }, [])

    console.log(api_data);

    
        console.log("We are here for no reason");

        return (

            props.data.products.map((item) => {
                // console.log("salam");

                return <div className="card" key={item.id}>
                    <img src={item.thumbnail} className="card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href="#" className="btn btn-primary">Go to</a>
                    </div>
                </div>
            })
        )
    


}





export default Card