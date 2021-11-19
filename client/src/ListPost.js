import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
import ListComments from "./ListComments";
function ListPost() {
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    const res = await axios.get("http://localhost:5002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="row">
      <h1>Listado de posts</h1>

      {Object.values(posts).map((post) => (
        <div className="col-md-4" key={post.id}>
          <div className="card border-primary">
            <div className="card-header bg-primary">{post.title}</div>
            <div className="card-body">
              <div>
                <ListComments comments={post.comments}  />
                <CreateComment id={post.id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListPost;
