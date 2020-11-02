import React from "react";

const Alert = ({message}) => {
  return (
    <div className="alert alert-success p-3 container" role="alert">
      {message}
    </div>
  );
};

export default Alert;
