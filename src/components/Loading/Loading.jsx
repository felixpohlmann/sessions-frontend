import React from "react";

import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="grow" />
    </div>
  );
};

export default Loading;
