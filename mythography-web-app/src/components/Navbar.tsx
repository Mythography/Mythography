"use client"

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0">
            <div
                className={`bg-gray-900 p-6 rounded-br-[35px] h-32 flex items-center ${isOpen ? 'justify-between' : 'justify-center'} transition-[width] duration-300 ease-in-out ${
                    isOpen ? 'w-[600px]' : 'w-32'
                }`}
                onClick={toggleMenu}
            >
                {/* Hamburger/X Icon */}
                <button className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Links Section */}
                <div className={`flex items-center space-x-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {isOpen && (
                        <>
                            <div className="border-l h-16 border-gray-200"></div>
                            <div className="flex space-x-8">
                                <div className="flex items-center justify-center w-32">
                                    <a href="#" className="text-white m-text-bold m-text-sm">Home</a>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-4 w-32">
                                    <a href="#" className="text-gray-200 m-text-sm">Our Products</a>
                                    <a href="#" className="text-gray-200 m-text-sm">Our Values</a>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-4 w-32">
                                    <a href="#" className="text-gray-200 m-text-sm">Meet the Creator</a>
                                    <a href="#" className="text-gray-200 m-text-sm">Contact Us</a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;