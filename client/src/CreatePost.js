import React, { useState } from "react";
import axios from "axios";
function CreatePost() {
  const [title, setTitle] = useState("Mi post");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", {
      title,
    });
  };
  return (
    <div>
      <h1>Crear Posts</h1>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            value={title}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CreatePost;
