import React from 'react'
import images from '../assets/flight.webp'
import HeaderNavComp from '../HeaderNavComp'
import { FlightBookingFormComp } from './FlightBookingFormComp'
import { ButtunYellowComp } from './ButtunYellowComp'

const HeaderComp = () => {
  return (
    <div className=' h-[80%] py-10 px-20 mt-2 bg-contain'
    style={{backgroundImage:`url("${images}")`,}}>
  <HeaderNavComp/>
  <div className="grid grid-cols-2 h-[80%]">
<div className='flex px-20 py-20 items-center'>
<div>
  <p className='text-white text-2xl'>FLYING BUDGET</p>
  <p className='text-white text-5xl'>We Are Very Reliable</p>
  <p className='text-amber-400 text-5xl'>Professional,Experienced</p>
  <p className='text-white text-sm mt-5'>
  <span className='text-amber-400'>Flyinn budget</span> is the versatile website expowering you</p>
  <p className='text-white text-sm'>full services airline offering <span className='text-amber-400'>reduce fairs.</span></p>
  <ButtunYellowComp lable={"FIND FLIGHT"} extraStyle={" flex mt-5"}/>
  </div>
</div>
<div className='flex'>
  <FlightBookingFormComp/>
</div>
  </div>
  
    </div>
  )
}

export default HeaderComp;