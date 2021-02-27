import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Logo(props) {
  var logoUrl = "http://pngimg.com/uploads/amazon/amazon_PNG11.png";
  if(props.color === "black"){
    logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png";
  }
  return (
    <Link to="/">
      <img style={props.style} className="logo" src={logoUrl} alt="Amazon" />
    </Link>
  );
}

export default Logo;
