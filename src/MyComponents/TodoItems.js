import React from "react";

export default function TodoItems({ todo, onDelete }) {
  let myStyle = {
    width: "20rem",
  };
  return (
    <div className="d-inline-flex m-3">
      <div className="card" style={myStyle}>
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
// onClick={() => {
//   onDelete(todo);
// }}
