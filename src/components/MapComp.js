import React from "react";
import map2 from "../assets/map2.avif";


const MapComp = () => {
  return (
    <div className="">
<p className="text-center font-extrabold text-lg">We Will Reach You All over the World</p>
    <div
      className="h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("${map2}")`,}}
    ></div>
    
    </div>
  );
};

export default MapComp;
