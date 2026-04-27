import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { className: "child1" }, "Siri");
const heading2 = React.createElement("h2", { className: "child2" }, "Reddy");
const parent = React.createElement("div", { id: "parent" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
