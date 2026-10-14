import { useEffect, useState } from 'react';
import './App.css';
import LiveChart from './components/LiveChart';

interface totalSalesProps {
    date:string;
    totals:number;
}

function App() {
   const [totalSales,setTotalSales] = useState<totalSalesProps[]>([]);

   const fetchTotalSales = async (date:Date) => {
       try {
           const endDate = date.toISOString();
           const startDate = new Date();
           startDate.setDate(startDate.getDate()-7)
           const startDateString = startDate.toISOString();
           const response = await fetch (`/sales/totals/past/${startDateString}/${endDate}`)
           const result = await response.json();
           setTotalSales(result)
           console.log(result)

   } catch(err) {
       console.error(err)
   }

   }

   useEffect(() => {
       const date = new Date();
       fetchTotalSales(date)
   },[])

   return (
      <div className='bg-slate-900 text-sky-400'>
      <h1 className='text-2xl'>sales</h1>
      <LiveChart totalSales={totalSales}/>
      </div>

   )
}

export default App;
