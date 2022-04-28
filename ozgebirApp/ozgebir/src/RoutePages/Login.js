import React from "react";
import Index from "../Login/Index";
import {useForm} from "react-hook-form";

export default function About() {
  return (
    <div>
      <body className="font-muli theme-cyan gradient">
        <div className="page-loader-wrapper">
          <div className="loader"></div>
        </div>
        <Index/>
      </body>
    </div>
  );
}
