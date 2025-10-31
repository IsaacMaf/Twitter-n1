import React, { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="page">
      <h1>📜 Seu Feed</h1>
      {posts.length === 0 ? (
        <p>Nenhum post ainda.</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default PostsPage;
