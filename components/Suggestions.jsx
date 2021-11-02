import React, { useEffect, useState } from 'react';
import faker from 'faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(10)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))

        setSuggestions(suggestions);
    }, []);

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See all</button>
            </div>

            {
                suggestions.map(profile => (
                    <div className="flex items-center mt-3" key={profile.id}>
                        <img className='w-10 h-10 rounded-full border border-yellow-400 p-[2px]' 
                            src={profile.avatar} 
                            alt="profile avatar" 
                        />

                        <div className="flex-1 ml-4">
                            <h2 className='font-semibold text-sm'>{profile.username}</h2>
                            <h3 className='text-xs text-gray-400'>Works at {profile.company.name}</h3>
                        </div>
                        <button className='text-blue-500 text-xs font-semibold'>Follow</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Suggestions
