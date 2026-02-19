import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const navigate = useNavigate();

    const item = props.data
    // console.log(item);
    
    return (
        <div 
            className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
            <div className="aspect-3/2">
                <img src={item.thumbnail} className="w-full h-full object-cover" alt="Card image" />
            </div>

            <div className="p-6">
                <h3 className="text-slate-900 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{item.description}
                </p>
                <button type="button"
                       onClick={()=>{navigate(`/products/${item.id}`)}} className="mt-6 px-6 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 cursor-pointer">View</button>
            </div>
        </div>
    )



}

export default Card