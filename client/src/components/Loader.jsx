import React from "react";
import LoadingGIF from "../images/loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__image">
        <img src={LoadingGIF} alt="gif"></img>
      </div>
    </div>
  );
};

export default Loader;
