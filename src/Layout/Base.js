import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Base(props) {
  return (
    <div>
      <Header></Header>
      <div id="container" role="main">
        <div id="home" className="page p-home hidden">
          <div className="fixed-wrapper" />
          <div className="js-scroll">
            {props.children}

            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;
