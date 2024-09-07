import { useState, ChangeEvent } from 'react';
import { PaperClipIcon, HeartIcon, ChatBubbleLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const dummyPosts = [
  {
    id: 1,
    title: 'Sample Post Title', // Added title field
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
    title: 'Another Example Post', // Added title field
    userName: 'Abir',
    userImage: 'https://dailyasianage.com/library/1549656662_7.jpg',
    postContent: 'Another example post. Let us know your thoughts.',
    postImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdQIS7GZMNlpIBzh0TvB0EP6ClQJFmKmg3URw3Z-fvkwatVQBWi6djfSGs_Mgpn-W38YOwDyXIeVzhDPof_JeBMRmeMzSnOBQHu-GL5PeyIPxv83BPkyY69ddSl45hlvef5fbtN83tEb0/s1600/advance.jpg',
    comments: [],
    likes: 2,
    commentsCount: 0,
  },
];

export default function ForumPage() {
  const [newTitle, setNewTitle] = useState<string>(''); // Title state for new post
  const [newPost, setNewPost] = useState<string>('');
  const [newComment, setNewComment] = useState<string>(''); // Comment state
  const [commentFile, setCommentFile] = useState<File | null>(null); // File state for comment attachments
  const [file, setFile] = useState<File | null>(null);
  const [posts, setPosts] = useState(dummyPosts);
  const [likedPosts, setLikedPosts] = useState<number[]>([]); // To track liked posts
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handlePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };

  const handleCommentFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentFile(e.target.files?.[0] ?? null); // Handle comment file change
  };

  const handlePostSubmit = () => {
    if (newPost.trim() && newTitle.trim()) {
      const newPostObject = {
        id: posts.length + 1,
        title: newTitle, // New title added here
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
      setNewTitle(''); // Reset the title input
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

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (postId: number) => {
    if (newComment.trim() || commentFile) {
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                userName: 'Current User',
                comment: newComment,
                image: commentFile ? URL.createObjectURL(commentFile) : 'https://dailyasianage.com/library/1549656662_7.jpg',
              },
            ],
            commentsCount: post.commentsCount + 1,
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewComment(''); // Clear comment field after submission
      setCommentFile(null); // Clear comment file after submission
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.postContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) // Search by title too
  );

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-full md:w-8/12 space-y-4">
        {/* Search Box */}
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
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* New Post Input */}
        <div className="mb-4 p-4 border rounded-lg bg-white shadow">
          <input
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Title of your post"
            className="w-full border rounded-lg p-2 mb-2"
          />
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

        {/* Posts */}
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
            <h3 className="text-lg font-semibold mb-1">{post.title}</h3> {/* Display title */}
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
                <HeartIcon className="h-5 w-5 mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center text-gray-500">
                <ChatBubbleLeftIcon className="h-5 w-5 mr-1" />
                {post.commentsCount}
              </button>
            </div>
            
            {/* Comments Section */}
            <div>
              {post.comments.length > 0 ? (
                post.comments.map((comment, idx) => (
                  <div key={idx} className="border-t pt-2 mt-2">
                    <div className="flex items-start mb-2">
                      <img
                        src={comment.image}
                        alt={comment.userName}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <span className="font-bold">{comment.userName}</span>
                        <p className="text-gray-700">{comment.comment}</p>
                        {comment.image && (
                          <img
                            src={comment.image}
                            alt="Attachment"
                            className="h-72 mt-2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm mb-4">No comments yet. Be the first to comment!</div>
              )}

              {/* Add Comment Input */}
              <div className="mt-4 flex items-center">
                <textarea
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Write a comment..."
                  rows={2}
                  className="w-full border rounded-lg p-2"
                />
                <button
                  onClick={() => handleCommentSubmit(post.id)}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Comment
                </button>
                <label className="ml-2 cursor-pointer">
                  <PaperClipIcon className="h-5 w-5 text-gray-500" />
                  <input
                    type="file"
                    onChange={handleCommentFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
