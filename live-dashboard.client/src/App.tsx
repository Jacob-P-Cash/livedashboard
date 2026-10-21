import { useState } from 'react';
import './App.css';
import SalesChart from './widgets/SalesChart';
import OrdersChart from './widgets/OrdersChart';



function App() {
   
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');

   

   return (
      <div className='bg-slate-900 text-sky-400 rounded-md'>
      <h1 className='text-2xl'>sales</h1>
      <div className='flex min-w-100% justify-evenly'>
        <div className='flex gap-1.5'>
      <label htmlFor='start-date' >Start Date:</label>
      <input type='date' id='start-date' onChange={(e) => setStartDate(e.target.value)}/>
      </div>
         <div className='flex gap-1.5'>
      <label htmlFor='end-date' >End Date:</label>
      <input type='date' id='end-date' onChange={(e)=> setEndDate(e.target.value)}/>
      </div>
      </div>
      <SalesChart start={startDate} end={endDate}/>
      <OrdersChart start={startDate} end={endDate}/>
      </div>

   )
}

export default App;
