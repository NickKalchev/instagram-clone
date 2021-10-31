import React from 'react';
import Post from './Post';

const posts = [
    {
        id: '123',
        username: 'N!ck',
        userImg: 'https://lh3.googleusercontent.com/a-/AOh14GjIYMwF8PXbhLuAUdVuMIjORvnyuCnXOpTPnOX7=s96-c',
        pic: "https://free4kwallpapers.com/uploads/originals/2020/09/20/cool-geometric-triangular-abstract-wallpaper.jpg",
        headline: "The best logo ever created"
    },
    {
        id: '123',
        username: 'N!ck',
        userImg: 'https://lh3.googleusercontent.com/a-/AOh14GjIYMwF8PXbhLuAUdVuMIjORvnyuCnXOpTPnOX7=s96-c',
        pic: "https://free4kwallpapers.com/uploads/originals/2020/09/20/cool-geometric-triangular-abstract-wallpaper.jpg",
        headline: "The best logo ever created"
    },
    {
        id: '123',
        username: 'N!ck',
        userImg: 'https://lh3.googleusercontent.com/a-/AOh14GjIYMwF8PXbhLuAUdVuMIjORvnyuCnXOpTPnOX7=s96-c',
        pic: "https://free4kwallpapers.com/uploads/originals/2020/09/20/cool-geometric-triangular-abstract-wallpaper.jpg",
        headline: "The best logo ever created"
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post 
                key={post.id} 
                id={post.id} 
                username={post.username}
                userImg={post.userImg}
                pic={post.pic}
                headline={post.headline}
                />
            ))}
        </div>
    )
}

export default Posts;
