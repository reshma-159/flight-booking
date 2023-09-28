import React from "react";
import CoinImage from "../assets/coin.png";
import bag from "../assets/bag.avif";
import bhand from "../assets/bhand.png";
import phoe from "../assets/phoe.png";
import tickk from "../assets/tickk.png";
import LowestComp from "../components/LowestComp";
import ProfessionalComp from "./ProfessionalComp";


const ServicesComp = () => {
  return (
    <div className="h-[80%] py-15  mt-20 ">
      <div className="grid grid-cols-3 gap-20 h-[90%]">
        <div>
          <p className="text-sm">
            BEST CHOICE
            <br></br>
          </p>
          <p className="text-3xl mt-1">
            why should<br></br> you use
            <span className="text-[#3881c5]">
              {""} Our <br></br>services
            </span>
          </p>
          <div>
            <div className="mt-10">
              <div className=" flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[30px] h-[30px]" alt='coin' />
              </div>
            </div>
            <p className="text-black text-lg mt-2">Price Beating Guarantee</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-900">
                Our goal is to provide you with the best travel experience
                possible,<br></br> from start to finish
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-5">
            <div className=" flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
              <img src={tickk} className="w-[30px] h-[30px]" alt='tick'/>
            </div>
          </div>
          <p className="text-black text-lg mt-2">Special Offers</p>
          <div className="w-[200px] mt-1">
            <p className="text-sm text-gray-900">
              We do offer promotional deals, Simply contact us <br></br> and get advantage
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div className=" flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={phoe} className="w-[30px] h-[30px]" alt='phone' />
              </div>
            </div>
            <p className="text-black text-lg mt-2">Customer Service 24/7</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-900">
              We do offer promotional deals, Simply contact us <br></br> and get advantage
            </p>
            </div>
          </div>
        </div>
        <div>
        <div>
            <div className="mt-5">
              <div className=" flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={bhand} className="w-[30px] h-[30px]" alt='band' />
              </div>
            </div>
            <p className="text-black text-lg mt-2">99% Satisfaction</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-900">
                We always try our best to give people more than what they <br></br> expect to get
              </p>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <div className=" flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={bag} className="w-[30px] h-[30px]" alt='bag' />
              </div>
            </div>
            <p className="text-black text-lg mt-2">Low Deposit</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-900">
                Our goal is to provide you with the besttravel experience possible,<br></br> from start to finish
              </p>
            </div>
          </div>  
          </div>
      </div>
      <LowestComp/>
      <ProfessionalComp/>
    
    </div>
  );
};

export default ServicesComp;
