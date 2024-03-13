import React from "react";


import Footer from "./Footer";
import GetDemo from "./GetDemo";
import ImageSection from "./ImageSection";

import Header from "./Header";
import Slid from "./Slide";
import Clients from "./Clients";
import Community from "./Community";
import Sectionn from "./Sectionn";
import Data from "./Data";
import LearnMII from "./LearnMII";
import Cart from "./Cart";


export default function LandingPagePage() {
  

  return (
    <>

     
      <div className="w-full overflow-auto bg-white-A700 shadow-lg">
        <Header/>
        <div className="flex flex-col gap-[30px]">
          <Slid/>
          <Clients/>
          <Community/>
        </div>
        <div className="flex flex-col mt-[26px] gap-[33px]">
          <Sectionn/>
          <Data/>
          <LearnMII/>
          <Cart/>
          <ImageSection/>  
        </div>
        <div className="mt-[61px]">
              <GetDemo/>
              <Footer/>
        </div>    
      </div>
    </>
  );
}
