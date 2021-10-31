import React from 'react';
import Image from 'next/image';
import logo from '../public/images/header-logo.png';
import mobileLogo from '../public/images/header-logo-mobile.png';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-99'>
            <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto"> 
            
                <div className="relative hidden lg:inline-grid w-48 cursor-pointer">
                    <Image src={logo} layout='fill' objectFit='contain' />
                </div>

                <div className="relative w-24 lg:hidden flex-shrink-0 ml-2 cursor-pointer">
                    <Image src={mobileLogo} layout='fill' objectFit='contain' />
                </div>

                <div className="max-w-xs">
                    <div className='mt-1 relative p-3 rounded-md'>
                        <div className="flex absolute inset-y-0 pl-3 items-center pointer-events-none">
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type="text" placeholder='Search' />
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className='headerButton' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <div className="realtive headerButton">
                        <PaperAirplaneIcon className='headerButton rotate-45 -mr-2 hover:scale-110' />
                        <div className="absolute top-3 text-xs w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse">3</div>
                    </div>
                    <PlusCircleIcon className='headerButton' />
                    <UserGroupIcon className='headerButton' />
                    <HeartIcon className='headerButton' />

                    <img className='h-10 rounded-full cursor-pointer hover:scale-110 transition-all duration-150 ease-out' src='https://lh3.googleusercontent.com/a-/AOh14GjIYMwF8PXbhLuAUdVuMIjORvnyuCnXOpTPnOX7=s96-c' alt='profile picture' />
                </div>
            </div> 
        </div>
    )
}

export default Header
