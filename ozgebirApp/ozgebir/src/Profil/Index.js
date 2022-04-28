import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "./Body";

function Page() {
  return (
    <div className="page">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default Page;
