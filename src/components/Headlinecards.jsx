import React from 'react'

const Headlinecurts = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO's Out</p>
          <p className='px-2 pt-4'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute buttom-4 my-4 '>Order Now </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/2282536/pexels-photo-2282536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Pepperoni Pizza </p>
          <p className='px-2 pt-4'>New Added</p>
          <button className='border-white bg-white text-black mx-2 absolute buttom-4 my-4 '>Order Now </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=faq73viCFGvfpKxcBuHcOI8kyT99B-p-jScipke-VuQ=" alt="" />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sandwich And Slice</p>
          <p className='px-2 pt-4'> Of Lemons</p>
          <button className='border-white bg-white text-black mx-2 absolute buttom-4 my-4 '>Order Now </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Headlinecurts
