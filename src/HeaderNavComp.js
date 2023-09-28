import React from 'react';

const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold">Flyinn</p>
          <p className="text-5m text-center">BUDGET</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <a href="index.html" className="ml-5">
          <div className=' hover:border-b-[2px] border-b-yellow-400'>
            <p  className="text-zinc-950">Home</p>
          </div>  
        </a>
        <a href="index.html" className="ml-5">
          <div className=' hover:border-b-[2px] border-b-yellow-400'>
            <p  className="text-zinc-950">ABOUT US</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className=' hover:border-b-[2px] border-b-yellow-400'>
            <p  className="text-zinc-950">BOOKING TERMS</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className=' hover:border-b-[2px] border-b-yellow-400'>
            <p  className="text-zinc-950">FLIGHT</p>
          </div>
          
        </a>
        <a href="index.html" className="ml-5" >
          <div className=' py-2 px-4.5 border-white border-[2px] hover:border-b-[2px] hover:border-b- [2px] border-b-yellow-400'>
            <p  className="text-zinc-950">GET IN TOUCH</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeaderNavComp;


