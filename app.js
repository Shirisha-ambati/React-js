import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { className: "child1" }, "Siri");
// const heading2 = React.createElement("h2", { className: "child2" }, "Reddy");
// const parent = React.createElement("div", { id: "parent" }, [
//   heading1,
//   heading2,
// ]);
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "h1",
//     { className: "child1", id: "child1", style: { color: "yellow" } },
//     "siri",
//   ),
//   React.createElement(
//     "h2",
//     { className: "child2", style: { fontStyle: "italic" } },
//     "reddy",
//   ),
//   React.createElement("h3", null, "reddy"),
// );
// const h1 = React.createElement("h1", { key: "2014" }, "shirisha");
// const h2 = React.createElement("h2", { key: "2015" }, "reddy");
// const h3 = React.createElement("h3", { key: "2016" }, "ambati");
// const header = React.createElement("div", { className: "title" }, [h1, h2, h3]);
// const Component = () => "Namaste React by Akshay saini";

// const header = () => (
//   <div className="title">
//     {component()}
//     <h1 key="2014">shirisha</h1>
//     <h2 key="2015">reddy</h2>
//     <h3 key="2016">ambati</h3>
//   </div>
// );
// const header = () => (
//   <div className="title">
//     {<Component />}
//     <h1 key="2014">shirisha</h1>
//     <h2 key="2015">reddy</h2>
//     <h3 key="2016">ambati</h3>
//   </div>
// );
// const header = () => (
//   <div className="title">
//     {<Component></Component>}
//     <h1 key="2014">shirisha</h1>
//     <h2 key="2015">reddy</h2>
//     <h3 key="2016">ambati</h3>
//   </div>
// );
// const header = () => (
//   <div className="title">
//     {component}
//     <h1 key="2014">shirisha</h1>
//     <h2 key="2015">reddy</h2>
//     <h3 key="2016">ambati</h3>
//   </div>
// );
const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <h2>MyApp</h2>
      </div>

      {/* Search Bar */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* User Icon */}
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header());
