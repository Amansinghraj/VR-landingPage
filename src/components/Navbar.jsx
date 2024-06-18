import React, { useState } from 'react'
import {navItems} from "../constants/index"
import logo from "../assets/logo.png"
import { Menu,X } from 'lucide-react'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar =() =>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <>
    <nav className="sticky z-50 top-0 py-3  backdrop-blur-lg border-b  border-neutral-750/80">
      <div className='container px-4 mx-auto relative lg:text-sm'>
          <div className='flex justify-between items-center'>
            <div className='flex  items-center flex-shrink-0 '>
              <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">VR</span>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12 '>
              {navItems.map((item , index)=>(
                  <li key={index} className=' hover:text-orange-500'>
                    <a href={item.href}>{item.label}</a>
                  </li>

                ))}
            </ul>
            <div className='hidden lg:flex justify-center items-center space-x-12'>
              <a className='px-3 py-2 border rounded-md' href="#">Sign In

              </a>
              <a className='bg-gradient-to-r from-orange-200 to-orange-500 px-3 py-2  rounded-md' href="#">Create an account
              </a>
            </div>
              <div className='lg:hidden md:flex flex-col justify-'>
                <button onClick={toggleNavbar}>
                  {
                    mobileDrawerOpen ? <X/> : <Menu/>
                  }
                </button>
              </div>
          </div>
          {
            mobileDrawerOpen && (
              <div className='fixed right-0 z-20 bg-slate-200 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                <ul>
                  {
                    navItems.map((item,index)=>(
                      <li key={index} className='py-4'>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))
                  }
                </ul>
                <div className='flex space-x-6'>
                <a href="#" className="py-2 px-3 border rounded-md border-black">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-200 to-orange-500"
              >
                Create an account
              </a>
                </div>
              </div>
              )
          }
      </div>
    </nav>
    </>
  )
}

export default Navbar