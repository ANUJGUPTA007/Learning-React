import React from 'react'
import {Link , NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-evenly px-50 bg-gray-600 text-white py-30 h-24 font-bold text-2xl items-center w-screen'>   

        <div>
            <Link to="/">
                YoUr LoGo
            </Link>
        </div>

        <div className='flex list-none '>
            <li className='px-10'>
                <NavLink to="" className={({isActive})=>`${isActive ? "text-orange-400":"text-white"}`}>
                    Home
                </NavLink>
            </li>

            <li className='px-10'>
                <NavLink to="about" className={({isActive})=>`${isActive ? "text-orange-400":"text-white"}`}>
                    About
                </NavLink>
            </li>

            <li className='px-10'>
                <NavLink to="contact" className={({isActive})=>`${isActive ? "text-orange-400":"text-white"}`} >
                    Contact
                </NavLink>
            </li>

            <li className='px-10'>
                <NavLink to="github" className={({isActive})=>`${isActive ? "text-orange-400":"text-white"}`} >
                    Github
                </NavLink>
            </li>
        </div>


        <div>
            <Link to="#" className='px-5'>
                Login
            </Link>
            
            <button className='bg-orange-500 p-2 rounded-xl mx-5'>
                    Get Started
            </button>
            
        </div>

    </div>
  )
}

export default Header