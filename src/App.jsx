
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';


function App() {

  const allCoffee= useLoaderData();
  const[coffees,setCoffees] = useState(allCoffee)
  console.log(coffees)
  
   
    

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-purple-600 text-center'>All coffee:{coffees?.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-20'>
        {
         coffees?.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}
         
           ></CoffeeCard>)
        }
      </div>
      
        
     
    </div>
  )
}

export default App
