import React from 'react'

function CustomImage({image,styleContainer}:any) {
  return (
    <div className={`${styleContainer} rounded-full bg-slate-500 object-cover`}>
        <img src={image} alt=""  />
    </div>
  )
}

export default CustomImage