import React from "react";
import PageNotFoundImage from "../../assets/media/images/page_not_found2.png";

function PageNotFound(props) {
  return (
    <div className="container">
      <div className="page_not_found">
        <img src={PageNotFoundImage} alt="404, Page not found" />
      </div>
    </div>
  );
}

export default PageNotFound;
