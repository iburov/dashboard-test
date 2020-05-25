import React from "react";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="app-page-not-found">
      <h1>Something went wrong</h1>

      <p>
        There seems to be an issue with the link that you are trying to use, the
        link may be incorrect or it needs to be updated.
      </p>

      <img
        src="https://thumbs.gfycat.com/UnhealthyLimpEyelashpitviper-max-1mb.gif"
        alt="Page Not Found"
      />
    </div>
  );
}

export default PageNotFound;
