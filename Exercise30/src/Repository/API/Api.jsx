import { createContext, useEffect, useState } from "react"

export const API_INSTANCE = createContext()



export const CallApi = ({ children}) => {

    const [data, SetApi] = useState([])
    console.log("Called");
    useEffect(() => {


        fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data) => {
                SetApi(data)
                console.log("Called for nothing hehe");
                console.log(data);

            })
    }, [])


    return (
        <API_INSTANCE.Provider value={data}>
            {children}

        </API_INSTANCE.Provider>
    )
}


export default CallApi
