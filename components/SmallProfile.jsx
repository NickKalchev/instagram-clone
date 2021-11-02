import React from 'react';
import { signOut, useSession } from 'next-auth/react';

function SmallProfile() {
    const { data: session } = useSession();
    
    return (
        <div className='flex items-center justify-between mt-12 ml-10'>
            <img className='rounded-full border border-gray-300 p-[2px] w-16 h-16' 
                src={session?.user?.image}
                alt="" 
            />

            <div className="flex-1 mx-4">
                <h2 className='font-bold'>{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram Clone</h3>
            </div>

            <button className='text-sm text-blue-400 ml-3 hover:scale-110 
                cursor-pointer transition-all duration-150 ease-out 
                hover:text-red-600' onClick={signOut}>
                Sign out
            </button>

        </div>
    )
}

export default SmallProfile
