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
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            value={title}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
