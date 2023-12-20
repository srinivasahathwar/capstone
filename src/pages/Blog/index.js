import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
  ]);
  return (
    <div>
      <Header page="blog" />
      <h1>Little Lemon Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Blog;
