import React from 'react'
import blackMarble from '../assets/blackMarble.jpg'
import whiteMarble from '../assets/whiteMarble.jpg'

const AllProducts = () => {
  return (
    <div className='flex flex-col gap-10 w-full'> 
        <div className='h-[150px] w-full bg-primary flex justify-center items-center'>
            <h2 className='text-white text-3xl font-light font-abel'> <span className="border-t-2 border-l-2 pl-1">Tüm</span><span className="border-b-2 border-r-2 pr-1"> Ürünler</span> </h2>
        </div>
        <div className='flex flex-row gap-5 w-full mx-4'>
          <div className='flex flex-col justify-center items-center border border-primary px-2 pt-2'>
            <img src={blackMarble} className='w-[180px] h-[180px] filter brightness-75' alt="" />
            <p className='text-center text-primary font-semibold'>Siyah Karma Mermer</p>
            <p className='text-end self-end text-sm font-thin text-primary cursor-pointer' >Karşılaştır </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-primary px-2 pt-2'>
            <img src={whiteMarble} className='w-[180px] h-[180px] filter brightness-75' alt="" />
            <p className='text-center text-primary font-semibold'>Beyaz Karma Mermer</p>
            <p className='text-end self-end text-sm font-thin text-primary cursor-pointer'>Karşılaştır </p>
          </div>
         
        </div>


    </div>
  )
}

export default AllProducts