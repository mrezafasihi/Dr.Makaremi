import React from 'react'

function CustomImage({image}:any) {
  return (
    <div className='w-[31px] h-[31px] rounded-full bg-slate-500'>
        <img src={image} alt="" />
    </div>
  )
}

export default CustomImage