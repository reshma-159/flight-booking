import React from 'react'

export const ButtunYellowComp = ({lable, extraStyle}) => {
  return (
    <div>
    <div className={`${extraStyle}`}>
    <a href="index.html"  >
            <div className=' py-2 px-5 bg-yellow-400 text-sm'>
              <p  className="text-white text-center">{lable}</p>
            </div>
          </a>
          </div></div>
  )
}
