import React from "react";

const select = ({ children, ...props }) => {
  return (
    <div className="select_wrapper">
      <select {...props}>{children}</select>
    </div>
  );
};

export default select;
