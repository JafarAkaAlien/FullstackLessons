import { useContext } from 'react';
import Card from '../components/Card';
import { ApiContext, ApiProvider } from '../Repository/ApiContext';

const Home = () => {

    const { api_data } = useContext(ApiContext)
    // const api_data = api
    console.log(api_data);
    

    return (

        <div className='flex flex-wrap justify-between' >
            {
                api_data.map((item) => {
                    // console.log(item);

                    return (
                        
                            <Card key={item.id} data={item}/>
                    )
                })

            }

        </div>

    )
}

export default Home