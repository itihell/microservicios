import React, { useState, useEffect } from "react";
import axios from "axios";

function ListComments({ id }) {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const res = await axios.get(`http://localhost:5001/posts/${id}/comments/`);
    setComments(res.data);
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      <ul>
        {Object.values(comments).map((comment) => (
          <li>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComments;