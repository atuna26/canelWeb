import { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import logoCanel from '../../assets/logoCanel.png'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll position
  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`w-full ${location.pathname === "/" ? "fixed top-0 left-0" : "bg-white"}  flex justify-between items-center z-20 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <img src={logoCanel} alt='Canel Logo' className='h-[60px] cursor-pointer' onClick={() => navigate("/")} />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((nav,index) => (
          <li
            key={nav.id}
            className={`font-poppins font-light cursor-pointer text-base text-primary ${index !== navLinks.length-1 ? "mr-10": ""} `}
          >
            <Link className={`${index !==navLinks.length-1 ?"border-r border-primary pr-10":""}`} to={`/${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {toggle ? (
          <XCircleIcon
            className='w-[50px] text-gray object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <Bars3Icon
            className='w-[50px] text-gray object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
        )}

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-white shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-light cursor-pointer text-[16px] text-secondary mb-0`}
              >
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