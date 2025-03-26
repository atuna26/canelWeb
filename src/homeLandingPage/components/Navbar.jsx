import { useState } from 'react'
import { navLinks } from '../constants'
import  logoCanel  from '../../assets/logoCanel.png'
import { Bars3Icon,XCircleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const location = useLocation()
  const [toggle,setToggle] = useState(false)

  return (
    <nav className='w-full flex  justify-between my-4 items-center navbar '>
      <img src={logoCanel} alt='Brain Logo' className='h-[60px]' />

      <ul className='list-none sm:flex hidden justify-end pl-10 items-center flex-1'>
        {navLinks.map((nav)=>(
          <li key={nav.id} className={`font-poppins font-light cursor-pointer text-base text-primary mr-10`}>
            
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        { toggle ?  <XCircleIcon  className='w-[50px] text-gray object-contain' onClick={() => setToggle((prev)=> !prev)}/> : <Bars3Icon className='w-[50px] text-gray object-contain' onClick={() => setToggle((prev)=> !prev)} /> }
        
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-white-gradient shadow-glow-inset absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav)=>(
              <li key={nav.id} className={`font-poppins font-light cursor-pointer text-[16px] text-gray mb-0`}>
                
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      
      </div>
      
    

    </nav>
  )
}

export default Navbar
