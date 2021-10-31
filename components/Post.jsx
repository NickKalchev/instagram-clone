import React from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

function Post({ id, username, userImg, pic, headline}) {
    return (
        <div className='bg-white my-4 border rounded-lg'>
            <div className="flex items-center p-5">
                <img className='rounded-full h-12 w-12 object-contain
                    border-2 border-indigo-400 p-0.5 mr-3' src={userImg} alt="" />
                <p className='flex-1 font-semibold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            <img className='object-cover w-full rounded-sm' src={pic} alt="" />

            <div className="flex justify-between items-center">
                <div className="flex space-x-4 my-4">
                    <HeartIcon className='postBtn ml-2' />
                    <ChatIcon className='postBtn' />
                    <PaperAirplaneIcon className='postBtn rotate-45' />
                </div>

                <BookmarkIcon className='postBtn mr-2' />
            </div>

            <p className='p-5 truncate'>
                <span className='font-semibold mr-1'>{username} </span>
                {headline}
            </p>

            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input className='border-none flex-1 focus:ring-0 outline-none' 
                    type="text" placeholder='Write a comment...' />
                <button className='hover:scale-125 cursor-pointer
                    transition-all duration-150 ease-out hover:text-indigo-600'>Post</button>
            </form>
        </div>
    )
}

export default Post
