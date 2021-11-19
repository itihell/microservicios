import React from "react";

function ListComments({ comments }) {
  return (
    <div>
      <ul className="list-group">
        {Object.values(comments).map((comment) => (
          <li key={comment.id} className="list-group-item">
            <i className="far fa-comments"></i>
            {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComments;
