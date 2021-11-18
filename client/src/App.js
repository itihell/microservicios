import React from "react";
import CreatePost from "./CreatePost";
import ListPost from "./ListPost";

function App() {
  return (
    <div>
      <h1>Mi Blog</h1>
      <CreatePost />
      <hr />
      <ListPost />
    </div>
  );
}

export default App;
