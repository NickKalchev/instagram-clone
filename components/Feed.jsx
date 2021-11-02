import { useSession } from 'next-auth/react';
import React from 'react';
import Posts from './Posts';
import SmallProfile from './SmallProfile';
import Suggestions from './Suggestions';
import UserStories from './UserStories';

function Feed() {
    const { data: session } = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
            xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className='col-span-2'>
              <UserStories />
              <Posts />
            </section>

        {session && (
             <section className='hidden xl:inline-grid md:col-span-1'>
             <div className="fixed top-18">
                 <SmallProfile />
                 <Suggestions />
             </div>

         </section>
        )}
        </main>
    )
}

export default Feed
