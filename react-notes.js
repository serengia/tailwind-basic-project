// HOW REACT AND VIRTUAL DOM WORKS

import React from "react";

export default function reactNote() {
  return (
    <div className="container">
      <h1 data-header="header">Tile example</h1>
      <h4 className="desc">Description here</h4>
      <p>This is simple paragraph</p>
    </div>
  );
}

// JSX under the hood
// VIRTUAL DOM
React.createElement("div", { class: "container" }, [
  React.createElement("h1", { dataset: {} }, "Title example"),
  React.createElement("h4", { class: "desc" }, "Description here"),
  React.createElement("p", null, "This is simple paragraph"),
]);
