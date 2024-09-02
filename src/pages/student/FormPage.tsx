import React, { useState, ChangeEvent } from 'react';
import { PaperClipIcon, HeartIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const dummyPosts = [
  {
    id: 1,
    userName: 'Suma Layla',
    userImage: 'https://dailyasianage.com/library/1549656662_7.jpg',
    postContent: 'This is a sample post. Feel free to comment and react!',
    postImage: 'https://i.redd.it/yrobpdontb911.jpg',
    comments: [
      { userName: 'Jane Smith', comment: 'Great post!', image: 'https://images.squarespace-cdn.com/content/v1/58764bfdb3db2b3e1ed14061/d081d72e-8acb-4682-b5ed-097692369efa/IMG_4072.jpeg' },
      { userName: 'Alice Johnson', comment: 'I agree!', image: 'https://assets.teenvogue.com/photos/588687cbcedb26357b194f0c/master/w_320%2Cc_limit/01.png' },
    ],
    likes: 2,
    commentsCount: 2,
  },
  {
    id: 2,
    userName: 'Abir',
    userImage: 'https://dailyasianage.com/library/1549656662_7.jpg',
    postContent: 'Another example post. Let us know your thoughts.',
    postImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdQIS7GZMNlpIBzh0TvB0EP6ClQJFmKmg3URw3Z-fvkwatVQBWi6djfSGs_Mgpn-W38YOwDyXIeVzhDPof_JeBMRmeMzSnOBQHu-GL5PeyIPxv83BPkyY69ddSl45hlvef5fbtN83tEb0/s1600/advance.jpg',
    comments: [
      { userName: 'Bob Brown', comment: 'Interesting perspective!', image: 'https://i.redd.it/z02xvixbgrwb1.jpg' },
      { userName: 'Emily Davis', comment: 'I learned something new.', image: 'https://mzucker.github.io/images/noteshrink/notesA1_comparison.png' },
    ],
    likes: 2,
    commentsCount: 2,
  },
];

export default function ForumPage() {
  const [newPost, setNewPost] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [posts, setPosts] = useState(dummyPosts);
  const [likedPosts, setLikedPosts] = useState<number[]>([]); // To track liked posts
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newPostObject = {
        id: posts.length + 1,
        userName: 'Current User', // Replace with actual user data
        userImage: 'https://www.newagebd.com/files/records/news/202009/116708_161.jpg',
        postContent: newPost,
        postImage: file ? URL.createObjectURL(file) : '',
        comments: [],
        likes: 0,
        commentsCount: 0,
      };
      setPosts([newPostObject, ...posts]);
      setNewPost('');
      setFile(null);
    }
  };

  const handleLikeClick = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
    setLikedPosts(prevLikes => [...prevLikes, postId]);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.postContent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 p-4 border rounded-lg bg-white shadow">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search posts..."
            className="flex-1 border border-blue-500 rounded px-2 py-1"
          />
          <button
            className="flex items-center bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-400 transition-colors duration-300"
            onClick={() => {/* Add search functionality */}}
          >
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </div>

      <div className="mb-4 p-4 border rounded-lg bg-white shadow">
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
          rows={3}
          className="w-full border rounded-lg p-2 mb-2"
        />
        <div className="flex items-center gap-4">
          <button
            onClick={handlePostSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Post
          </button>
          <label className="cursor-pointer flex items-center">
            <PaperClipIcon className="h-5 w-5 text-gray-500" />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div key={post.id} className="p-4 border rounded-lg bg-white shadow">
            <div className="flex items-center mb-2">
              <img
                src={post.userImage}
                alt={post.userName}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="font-bold">{post.userName}</span>
            </div>
            <p className="mb-2">{post.postContent}</p>
            {post.postImage && (
              <div className="mb-2 border-t border-b border-light-blue-300 pt-2 pb-2">
                <img
                  src={post.postImage}
                  alt="Post"
                  className="w-full max-w-xl h-auto rounded border-light-blue-300 border-2"
                />
              </div>
            )}
            <div className="flex space-x-4 items-center mb-4">
              <button 
                className={`flex items-center ${likedPosts.includes(post.id) ? 'text-red-600' : 'text-gray-500'}`} 
                onClick={() => handleLikeClick(post.id)}
              >
                <HeartIcon className="h-5 w-5" />
                {post.likes}
              </button>
              <button className="text-blue-500 flex items-center">
                <ChatBubbleLeftIcon className="h-5 w-5" />
                {post.commentsCount}
              </button>
            </div>
            <div className="mt-2 border-t border-b border-gray-300 pt-2 pb-2">
              {post.comments.map((comment, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-start">
                    <img
                      src="https://www.newagebd.com/files/records/news/202009/116708_161.jpg"
                      alt={comment.userName}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <div className="flex-1">
                      <div className="bg-white border border-blue-500 p-2 rounded">
                        <p className="font-bold">{comment.userName}:</p>
                        <p>{comment.comment}</p>
                        <img
                          src={comment.image}
                          alt="Attached"
                          className="w-auto h-60 object-cover rounded mt-2" // Adjusted width
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 border border-blue-500 rounded px-2 py-1"
                />
                <label className="cursor-pointer ml-2">
                  <PaperClipIcon className="h-5 w-5 text-gray-500" />
                  <input
                    type="file"
                    className="hidden"
                  />
                </label>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                  Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
