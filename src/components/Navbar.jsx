import React, { useState } from 'react'
import biosoftech from "../assets/Hotel1.png"
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Register', path: 'https://hotel.biosoftech.in/signup', external: true },
        { name: 'Login', path: 'https://hotel.biosoftech.in/signin', external: true },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigate = (path, external) => {
        if (external) {
            window.open(path, '_blank');
        } else {
            navigate(path);
        }
        setIsOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 bg-white shadow'>
            <div className='flex items-center justify-between gap-4 px-4 md:px-14 h-20 border-b'>
                <div onClick={() => navigate("/")} className='w-40 md:w-60 h-16 md:h-20 hover:cursor-pointer flex items-center'>
                    <img src={biosoftech} alt="Logo" className='w-full h-full object-contain' />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            onClick={() => handleNavigate(link.path, link.external)}
                            className="relative inline-block font-bold text-xl lg:text-2xl cursor-pointer group 
                            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                            bg-clip-text text-transparent"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 
                             bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                             transition-all duration-500 ease-out 
                             group-hover:w-full"></span>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-amber-500 focus:outline-none">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b shadow-lg absolute w-full left-0 top-20 z-40 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col items-center py-6 gap-6">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onClick={() => handleNavigate(link.path, link.external)}
                                className="font-bold text-xl cursor-pointer 
                                bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                                bg-clip-text text-transparent hover:scale-105 transition-transform"
                            >
                                {link.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar