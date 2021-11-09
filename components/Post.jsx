import React, { useEffect, useState } from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

function Post({ id, username, userImg, pic, headline}) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => 
        onSnapshot(query(collection(db, 'posts', id, 'comments'), 
        orderBy('timestamp', 'desc')), 
        snapshot => setComments(snapshot.docs)
    ), [db, id]);

    useEffect(
        () => 
            onSnapshot(collection(db, 'posts', id, 'likes'),
            (snapshot) => setLikes(snapshot.docs)    
    ), [db, id]);

    useEffect(
        () => 
            setLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ), 
        [likes, db]
    );

    const likePost = async () => {
        if (liked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            });
        }
    };
    
    const postComment = async (e) => {
        e.preventDefault();

        const commentToPost = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToPost,
            username: session.user.username,
            profileImage: session.user.image,
            timestamp: serverTimestamp()
        });
    };

    return (
        <div className='bg-white my-4 border rounded-lg'>
            <div className="flex items-center p-5">
                <img className='rounded-full h-12 w-12 object-contain
                    border-2 border-indigo-400 p-0.5 mr-3' src={userImg} alt="" />
                <p className='flex-1 font-semibold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            <img className='object-cover w-full rounded-sm' src={pic} alt="" />

            {session && (
                <div className="flex justify-between items-center">
                <div className="flex space-x-4 my-4">
                    {liked ? (
                        <HeartIconSolid onClick={likePost} className='postBtn ml-2 text-red-600' />
                    ) : (
                        <HeartIcon onClick={likePost} className='postBtn ml-2' />
                    )}
                    <ChatIcon className='postBtn' />
                    <PaperAirplaneIcon className='postBtn' />
                </div>

                <BookmarkIcon className='postBtn mr-2' />
                </div>
            )}

            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-semibold mb-4 -mt-5'>{likes.length} likes</p>
                )}
                <span className='font-semibold mr-1'>{username} </span>
                {headline}
            </p>

            {comments.length > 0 && (
                <div className="ml-7 h-20 overflow-y-scroll scrollbar-thumb-black
                    scrollbar-thin">
                     {comments.map((comment) => (
                         <div className="flex items-center space-x-2 mb-6" key={comment.id}>
                             <img 
                                className='h-7 rounded-full' 
                                src={comment.data().profileImage} 
                                alt="" 
                            />
                            <p className='text-sm flex-1'>
                                <span className='font-semibold text-blue-800 mr-1'>
                                {comment.data().username}
                                </span>
                                {' '}
                                {comment.data().comment}
                            </p>

                            <Moment fromNow className='pr-5 text-xs'>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                         </div>
                     ))}
                </div>
            )}
            
            
            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7' />
                    <input 
                        className='border-none flex-1 focus:ring-0 outline-none' 
                        type="text" 
                        placeholder='Write a comment...' 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button 
                        className='hover:scale-125 cursor-pointer
                        transition-all duration-150 ease-out hover:text-indigo-600'
                        type='submit'
                        disabled={!comment.trim()}
                        onClick={postComment}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post
