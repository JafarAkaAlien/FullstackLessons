import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PurpleStar from '../components/PurpleStar'
import WhiteStar from '../components/WhiteStar'
import { ApiContext } from '../Repository/ApiContext'


function starCounter(review) {
    let array = []
    for (let i = 1; i <= 5; i++) {
        if (i <= review) {
            array.push(<PurpleStar />)
        }
        else {
            array.push(<WhiteStar />)
        }
    }
    return array
}




function returningData(called_data) {

    let newPrice = (Math.round(called_data.price*(100 - called_data.discountPercentage) ) /100)

    return (
        <div className="p-4">
            <div className="w-full">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
                    <div className="w-full lg:sticky top-0 lg:col-span-3">
                        <div className="grid grid-cols-2 gap-0.5">
                            {called_data.images.map((item) => {
                                return <div>
                                    <img src={item} alt="Product" className="w-full aspect-182/243 object-top object-cover" />
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="w-full lg:col-span-2">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{called_data.title}</h3>
                            <div className="flex items-center gap-1 mt-2">
                                {
                                    starCounter(Math.round(called_data.rating)).map(x => x)
                                }

                                <div className="flex items-center gap-4 text-slate-500">
                                    <span className="text-sm text-slate-500">40</span>
                                    <span>|</span>
                                    <a href="javascript:void(0)" className="text-sm text-slate-500 underline">View All Reviews</a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-slate-500 text-sm">{called_data.description}</p>
                            </div>
                            <div className="flex items-center flex-wrap gap-4 mt-6">
                                <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">${newPrice}</h4>
                                <p className="text-slate-500 text-lg"><strike>${called_data.price}</strike> <span className="text-sm ml-1.5">Tax included</span></p>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button" className="w-10 h-9 cursor-pointer border border-slate-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0">SM</button>
                                <button type="button" className="w-10 h-9 cursor-pointer border border-purple-600 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0">MD</button>
                                <button type="button" className="w-10 h-9 cursor-pointer border border-slate-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0">LG</button>
                                <button type="button" className="w-10 h-9 cursor-pointer border border-slate-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0">XL</button>
                                <button type="button" className="w-10 h-9 cursor-pointer border border-slate-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0">XXL</button>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button type="button" className="px-4 py-3 w-[45%] cursor-pointer border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium">Add to wishlist</button>
                                <button type="button" className="px-4 py-3 w-[45%] cursor-pointer border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Add to cart</button>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Select Delivery Location</h3>
                            <p className="text-slate-500 text-sm mt-2">Enter the pincode of your area to check product availability.</p>
                            <div className="flex items-center gap-2 mt-6 max-w-sm">
                                <input type='number'
                                    placeholder='Enter pincode' className="bg-slate-100 px-4 py-2.5 text-sm w-full  border-0 outline-0" />
                                <button type='button' className="border-0 outline-0 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-4 py-2.5 text-sm">Apply</button>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Product Information</h3>
                            <div className="mt-4" role="accordion">
                                <div className="hover:bg-slate-100 transition-all">
                                    <button type="button" className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 flex items-center">
                                        <span className="mr-4">Product details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180" viewBox="0 0 24 24">
                                            <path fillRule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clipRule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div className="pb-4 px-4">
                                        <p className="text-sm text-slate-500 leading-relaxed">{called_data.description}</p>
                                    </div>
                                </div>




                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Customer Reviews</h3>
                            <div className="flex items-start mt-6 flex-col gap-5">

                                {
                                    called_data.reviews.map(x => {
                                        return <div className="ml-3">
                                            <h4 className="text-slate-900 text-sm font-semibold">{x.reviewerName}</h4>
                                            <div className="flex space-x-1 mt-1">
                                                {
                                                    starCounter(x.rating).map((x) => x)
                                                }
                                                <p className="text-xs text-slate-500 ml-2!">{x.rating} months ago</p>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-4">{x.comment}</p>
                                        </div>
                                    })

                                }



                            </div>
                            <a href="javascript:void(0)" className="block text-purple-600 hover:underline text-sm mt-6 font-semibold">Read all reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Detail = () => {

    const { id } = useParams()

    const { api_data } = useContext(ApiContext)

    const [api_pers_data, SetApi] = useState([])

    useEffect(() => {
        console.log("Salam men Use effect: "+ api_data);
        
        SetApi(api_data)

    }, [api_data])


    let rev_array = []

    let called_data = []
    console.log(api_pers_data);
    
    if (api_pers_data.length<2) {
        return (<h1>
            Loading
        </h1>)
    }
    else {
        called_data = api_pers_data.find((x)=>x.id == id)
        console.log(called_data);
        return (returningData(called_data))
    }


}

export default Detail