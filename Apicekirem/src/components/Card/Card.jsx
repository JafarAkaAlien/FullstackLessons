import React, { useEffect, useState } from 'react'
import "./Card.css"

const Card = () => {


    

    return (
        

        props.data.map((item) => {
            return <div className="card">
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