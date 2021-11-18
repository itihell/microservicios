import React, { useState } from "react";
import axios from "axios";
import ListComments from "./ListComments";

function CreateComment({ id }) {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    const url = `http://localhost:5001/posts/${id}/comments`;
    await axios.post(url, {
      content,
    });
  };
  return (
    <div>
      <ListComments id={id} />
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="comentario">Comentario</label>
          <input
            id="comentario"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            value={content}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CreateComment;