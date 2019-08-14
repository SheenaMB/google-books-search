import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function SearchButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export function SaveBtn(props) {
  const { type = "default", className, children, onClick } = props;
  return (
    <button onClick={() => onClick(props)} className={["btn btn-sm", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}
