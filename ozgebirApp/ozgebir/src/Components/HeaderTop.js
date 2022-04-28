import React from "react";

const HeaderTop = () => {
  return (
    <div id="header_top" className="header_top">
      <div className="container">
        <div className="hleft">
          <a className="header-brand" href="index.html">
            <i className="fa fa-graduation-cap brand-logo"></i>
          </a>
          <div className="dropdown">
            <a href="#" className="nav-link icon menu_toggle">
              <i className="fe fe-align-center"></i>
            </a>
            <a href="page-search.html" className="nav-link icon">
              <i
                className="fe fe-search"
                data-toggle="tooltip"
                data-placement="right"
                title="Search..."
              ></i>
            </a>
            
            <a href="app-social.html" className="nav-link icon xs-hide">
              <i
                className="fe fe-share-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Social Media"
              ></i>
            </a>
           
           
          </div>
        </div>
        <div className="hright">
          <a href="login.html" className="nav-link icon settingbar">
            <i className="fe fe-power"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
