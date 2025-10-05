// src/components/BlogList.jsx
import React, { useEffect } from "react";

const BlogList = ({ posts }) => {
  useEffect(() => {
    if (posts.length > 0) {
      document.title = posts[0].title + " | Personal Blog";
    } else {
      document.title = "My Personal Blog";
    }
  }, [posts]);

  return (
    <div className="blog-list">
      <h2>📰 Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Start writing your first blog!</p>
      ) : (
        posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
