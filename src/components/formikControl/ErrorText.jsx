import React from "react";

const ErrorText = (props) => {
  return (
    <span className="text-danger" style={{ fontSize: "10px" }}>
      {props.children}
    </span>
  );
};

export default ErrorText;
