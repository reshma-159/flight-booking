import React from "react";
import { LOWEST_FARE_LIST } from "../constants/AppConstatns";
import { ButtunYellowComp } from "./ButtunYellowComp";
import rain from "../assets/rain.jpeg"
export const LowestComp = () => {
  return (
    <div className="py-10 px-10 h-[10%] w[80px] p-11 bg-contain mt-2"
    style={{backgroundImage:`url("${rain}")`,}}>
        <p className="text-5 text-center text-white">CURRENT FARE</p>
        <p className="text-3xl mt-6 text-center text-white">
          Today's LOWEST FARE
        </p>
      <div className="flex bottom-[-1000px] ml-[20%]">
        {LOWEST_FARE_LIST.map((item) => {
          return (
            <div key={`lowest-fare-${item.id}`} className="bg-white px-5 py-5 text-center mr-7 rounded-lg shadow-md mt-5">
             <img src={item.image} className="h-[150px] w-[150px] rounded-lg" alt='abc'/>
              <p className="mt-2 font-semibold">{item.heading}</p>
              <p className="text-sm"><span className="text-grey-400">starting from</span> 
              <span className="text-red-400 font-semibold">{item.price}</span></p>
              <ButtunYellowComp lable={'CHECH OUT NOW'} extraStyle={"mt-5"}/>
            </div>
          );
        })
        }
      </div>
    </div>
  
  );
};

export default LowestComp;
