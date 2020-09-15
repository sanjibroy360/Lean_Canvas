import React from "react";
import {Link} from "react-router-dom";
import Icon from "../../assets/media/images/logo.png";

function Logo(props) {
  return (
    <Link to="/">
      <div className="container logo">
        <div className="image">
          <img src={Icon} alt="" />
        </div>
        <p className="brand_name">Lean Canvas</p>
      </div>
    </Link>
  );
}

export default Logo;
