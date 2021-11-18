import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
function ListPost() {
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    const res = await axios.get("http://localhost:5000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <h1>Listado de posts</h1>
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <CreateComment id={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListPost;
