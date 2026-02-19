import { createContext, useEffect, useState } from "react"

export const ApiContext = createContext()

export function ApiProvider({children}) {

    const [api_data, fetchApi] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => fetchApi(data.products));


    }, [])


    return (

        <ApiContext.Provider value={{api_data}}>
            {children}
        </ApiContext.Provider>

    )
}