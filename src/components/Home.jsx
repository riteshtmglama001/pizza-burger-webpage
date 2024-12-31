import React, { useState}from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose, AiFillTag } from "react-icons/ai" 
import { BsFillCartFill,BsFillSaveFill} from "react-icons/bs"
import { TbTruckDelivery} from "react-icons/tb"
import { FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp } from 'react-icons/md'

const Home = () => {
    const [nav,setNav]=useState(false)
  return (
    <div className="max-M-[1640px] mx-auto flex justify-between items-center p-4">
        <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>

        <AiOutlineMenu onClick={()=> setNav(!nav)} size={30}/>
    </div>
    <h1 className='text-2xl  sm:text-3xl lg:text-4xl p-2'>Best 
        <span className='font-bold p-2'>Eats</span>
    </h1>
    <div className='hidden sm:flex items-center bg-gray-200 rounded-full p-1 text-[14px]  '>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
    </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center p-2 w-[100px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-1  w-full focus:outline-none'  type="text" value="" placeholder='Search food Items'/>
        </div>
        <button className='bg-black text-white  rounded-full hidden sm:flex items-center'>
        <BsFillCartFill size={20} className='mr-2'/>    cart
        </button>
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' > 
</div>  : ""}
<div className={nav ? 'fixed top-0 left-0  w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
    <AiOutlineClose  onClick={()=> setNav(!nav)}size={30} className='absolute right-4 top-4 cursor=pointer'/>
    <h2 className='text-2xl p-4'> Best <span className='font-bold'>Eats</span></h2>
    <nav>
        < ul className='flex flex-col p-4 text-gray-800 '>
            <li className='text-xl py-4 flex '><TbTruckDelivery size={ 25}/>Order </li>
            <li className='text-xl py-4 flex '>< MdFavorite size={ 25}/>Favorites </li>
            <li className='text-xl py-4 flex '><FaWallet size={ 25}/>Wallet </li>
            <li className='text-xl py-4 flex '>< MdHelp  size={ 25}/> Help</li>
            <li className='text-xl py-4 flex '>< AiFillTag size={ 25}/>Promotions </li>
            <li className='text-xl py-4 flex '>< BsFillSaveFill size={ 25}/>Best Ones </li>
            <li className='text-xl py-4 flex '><  FaUserFriends size={ 25}/>Invite Friends  </li>
        </ul>
    </nav>
    <div>
  
</div>
</div>

    </div>
  );
}

export default Home
