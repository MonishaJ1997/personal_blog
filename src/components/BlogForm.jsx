// src/components/BlogForm.jsx
import React, { useState } from "react";

const BlogForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("⚠️ Both title and content are required!");
      return;
    }
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    onAddPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-form">
      <h2>✍️ Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default BlogForm;
