// src/App.jsx
import React from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./components/styles.css";

const AppContent = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useLocalStorage("blogPosts", []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>My Personal Blog</h1>
        <ThemeToggle />
      </header>

      <main>
        <BlogForm onAddPost={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
