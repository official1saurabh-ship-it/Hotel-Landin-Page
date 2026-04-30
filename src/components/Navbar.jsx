import React from 'react'
import biosoftech from "../assets/biosoftech.jpeg"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between gap-8  border-b px-14 sticky top-0 z-50 bg-white shadow '>
            <div>
                <div onClick={() => navigate("/")} className='bg-indigo-900 w-60 h-20 hover:cursor-pointer'>
                    <img src={biosoftech} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="flex items-center justify-center gap-8">
                <div onClick={() => navigate("/")} className="relative inline-block font-bold text-2xl cursor-pointer group 
                bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                bg-clip-text text-transparent">

                    Home

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                     bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                     transition-all duration-500 ease-out 
                     group-hover:w-full"></span>

                </div>
                <div onClick={() => navigate("/about")} className="relative inline-block font-bold text-2xl cursor-pointer group 
                bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                bg-clip-text text-transparent">

                    About

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                     bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                     transition-all duration-500 ease-out 
                     group-hover:w-full"></span>

                </div>
                <div className="relative inline-block font-bold text-2xl cursor-pointer group 
                bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                bg-clip-text text-transparent">
                    <a href="https://hotel.biosoftech.in/signup" target="_blank">Register</a>


                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                     bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                     transition-all duration-500 ease-out 
                     group-hover:w-full"></span>

                </div>
                <div className="relative inline-block font-bold text-2xl cursor-pointer group 
                bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                bg-clip-text text-transparent">
                    <a href="https://hotel.biosoftech.in/signin" target="_blank">Login</a>

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                    bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                    transition-all duration-500 ease-out 
                    group-hover:w-full"></span>

                </div>
            </div>
        </div>
    )
}

export default Navbar