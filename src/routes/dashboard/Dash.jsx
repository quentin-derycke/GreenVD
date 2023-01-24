
import { useLoaderData } from 'react-router-dom';
import { LineChart } from '../../components/Charts/chart'

export default function Dash() 

{

    const orders = useLoaderData();



    const quantity = orders.map(order =>
   order.items.map(item => item.quantity))


   console.log(quantity)
    return(
<>

                <h1 >Dashboard</h1>
    
    <LineChart/>
    </>
                )
}