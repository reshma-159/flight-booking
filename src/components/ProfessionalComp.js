import React from "react";
import { ButtunYellowComp } from "./ButtunYellowComp";
import girl from "../assets/15.jpeg";

const ProfessionalComp = () => {
  return (
    <div className="flex h-[80%] py-10 px-10 mt-2">
      <div className="grid grid-cols-2">
        <div
          className="bg-contain  w-[530px] mt-20 bg-no-repeat "
          style={{backgroundImage:`url("${girl}")`,}}
        ></div>

        <div className="mt-20 px-5 py-2 gap-5">
          <span className="text-center">WHO WE ARE</span>
          <p className="text-3xl">
            We Are Very Reliable<br></br>
            <span className="text-[#e83b3b]">Professional, Experienced</span>
          </p>
          <br></br>
          <p>
            Established in 2000, Flyinn BUDGET has since positioned itself as
            one of the leading companies, providing great offers, competitive
            airfares, exclusive discounts, and a seamless online booking
            experience to many of its customers. The experience of booking your
            flight tickets, hotel stay, and holiday package through our desktop
            site or mobile app can be done with complete ease and no hassles at
            all. We also deliver amazing offers, such as Instant Discounts, Fare
            Calendar, MyRewardsProgram, MyWallet, and many more while updating
            them from time to time to better suit our customers’ evolving needs
            and demands.
          </p>
          <div className="flex">
            <ButtunYellowComp lable={"Read More"} extraStyle={"mt-5"} />
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default ProfessionalComp;
