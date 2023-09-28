import React from 'react'
import {AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


const FooterComp = () => {
  return (
    <div className='h-[50%] px-20  bg-slate-500'>
    <div className='grid grid-cols-4 gap-2 h-[90%] text-white'>
    <div>
        <p className='text-2xl font-bold'>FLYINN</p>
        <p className='text-sm'>BUDGET</p>
        <p className='text-sm mt-5'>Flyinn Budget is the versatile website 
        <br></br>empowering you full-Service
        airline
        <br></br> offering reduces fares.</p>
        <div className="flex justify-left h-[56px] items-center">
      <a href="#">{""}<BsFacebook size={20}/></a>
      <a href="#">{""}<AiOutlineTwitter size={20} className='ml-2'/></a>
      <a href="#">{""}<AiFillInstagram size={20} className='ml-2'/></a>
      <a href="#">{""}<AiFillLinkedin size={20} className='ml-2'/></a>

      </div>
    </div>
    <div>
        <p className='text-2xl font-bold'>Get in touch</p>
        <p>Phone: (301) 563-6685</p>
        <p>Email: info@Examples.com</p>
    </div>
    <div>
        <p className='text-2xl font-bold'>Flihgts</p>
        <ul>
            <li>Asia</li>
            <li>Africa</li>
            <li>Middle East</li>
            <li>North America</li>
            <li>Europe</li>
        </ul>
    </div>
    <div>
        <p className='text-2xl font-bold text-cyan-500'> Useful Links</p>
        <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Booking Terms</li>
        </ul>
    </div>
    </div>
    <div className='flex justify-between'>
        <p>@2023,All Rights Reserved By FLYINN Budget</p>
        <p>Terms & Conditions - Privacy Policy</p>
    </div>
    </div>
  )
}

export default FooterComp;