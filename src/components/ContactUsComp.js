import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'

export const ContactUsComp = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex justify-center h-[56px]">
        <div className="flex items-center" >
            <BiPhoneCall/>
            <p className='text-sm ml-2'>+91 0422 245 30 </p>
            <MdEmail className='ml-2'/>
            <p className='text-sm ml-2'>info@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center h-[56px] items-center">
      <a href="#">{""}<BsFacebook size={20}/></a>
      <a href="#">{""}<AiOutlineTwitter size={20} className='ml-2'/></a>
      <a href="#">{""}<AiFillInstagram size={20} className='ml-2'/></a>
      <a href="#">{""}<AiFillLinkedin size={20} className='ml-2'/></a>

      </div>
    </div>

  )
};
