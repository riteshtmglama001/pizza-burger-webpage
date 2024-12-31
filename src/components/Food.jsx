import React,{useState} from 'react'
import {categories,data} from '../data/data.js'
const Food = () => {
    // console.log(data);
    const [Foods, setFoods]=useState(data)
    // filter type burgers/pizza/etc
    const filterType=(categories)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===categories;
            })
        );
    };
    //filter by price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items </h1>
      {/* filter Row */}
    
    < div className='flex-col lg:flex-row  justify-between'>
         {/* * filter type */}
         <p className='font-bold text-gray-700'>Filter Type</p>
         <div className=' justify-between flex-wrap'>
            <button  onClick={()=> setFoods(data)}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>All</button>
            <button onClick={()=> filterType ('burger')} className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>Burgers</button>
            <button onClick={()=> filterType('pizza')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>Pizza </button>
            <button onClick={()=> filterType('salad')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>Salads</button>
            <button onClick={()=> filterType('chicken')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>Chicken </button>
         </div>
     {/** filter price*/}
     <div>
<p className='font-bold text-gray-700'>Filter Price </p>
<div className='justify-between max-w-[390px] w-full '>
<button onClick={()=> filterPrice ('$')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>$</button>
<button onClick={()=> filterPrice('$$')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>$$</button>
<button onClick={()=> filterPrice('$$$')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>$$$</button>
<button onClick={()=> filterPrice('$$$$')}className='m-1 border-orange-600 text-white-600 hover:bg-orange-600'>$$$$</button>
</div>

     </div>
   </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {/**display foods  */}
        {Foods.map((item,index)=>(
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300  '>
                <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-xl'>{item.price}</span>
                    </p>
                </div>
            </div>
        )
        )}


     </div>
     </div>
  )
}

export default Food
