import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';

function UserStories() {
    const [userStories, setUserStories] = useState([]);

    useEffect(() => {
        const userStories = [...Array(21)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ));

        setUserStories(userStories);
    }, [])


    return (
        <div className='flex space-x-3 p-6 bg-white mt-8 border-gray-200 border scroll
            rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded'>
            {userStories.map(user => (
                <Story key={user.id} img={user.avatar} name={user.username} />
            ))}
        </div>
    )
}

export default UserStories;
