import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

   
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        setBlogPosts(storedPosts);
    }, []);


    const addBlogPost = (e) => {
        e.preventDefault();
        if (title && description) { 
            const newPost = {
                id: Date.now(),
      title: title,
      description: description,
            };
            setBlogPosts([...blogPosts, newPost]);
  setTitle('');
            setDescription('');
            localStorage.setItem('blogPosts', JSON.stringify([...blogPosts, newPost])); 
        }
    };

    
    const deleteBlogPost = (id) => {
        const updatedPosts = blogPosts.filter(post => post.id !== id);
        setBlogPosts(updatedPosts);
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    };

    return (
        <>
     <div id='blog'>
        <div className="blog-section">
            <h1>My Blogs</h1>
            <form onSubmit={addBlogPost}>
                <input
       type="text"
       placeholder="Title"
            value={title}
          onChange={(e) => setTitle(e.target.value)} 
         required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                />
                <button type="submit">Add Blog Post</button>
            </form>
            <div className="blog-posts">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <button onClick={() => deleteBlogPost(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default Blog;