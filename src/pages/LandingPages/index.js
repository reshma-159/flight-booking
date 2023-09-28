import React from "react";
import { ContactUsComp } from "../../components/ContactUsComp";
import HeaderComp from "../../components/HeaderComp";
import ServicesComp from "../../components/ServicesComp";
import MapComp from "../../components/MapComp";
import FooterComp from "../../components/FooterComp";

export const LandingPages = () => {
  return (
    <div className="">
      <ContactUsComp />
      <HeaderComp />
      <ServicesComp />
      <MapComp />
      <FooterComp/>
    </div>
  );
};
