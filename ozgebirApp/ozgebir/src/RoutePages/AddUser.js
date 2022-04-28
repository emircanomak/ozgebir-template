import React from "react";
import LeftSidebar from "../Components/LeftSidebar";
import Index from "../AddUser/Index";

import HeaderTop from "../Components/HeaderTop";

export default function About() {
  return (
    <div>
      <body className="font-muli theme-cyan gradient">
        <div className="page-loader-wrapper">
          <div className="loader"></div>
        </div>
        <div id="main_content">
          <LeftSidebar />
          <Index/>

          <HeaderTop/>
        </div>
      </body>
    </div>
  );
}
