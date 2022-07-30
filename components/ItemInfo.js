import Image from 'next/image'
import React from 'react'

const ItemInfo = ({imgSrc,title,description}) => {
  return (
    <div className='relative  text-white group rounded-lg group-hover:rounded-lg '>
      <Image
        src={imgSrc}
        layout="responsive"
        width={1920}
        height={1080}
        quality={100}
        objectFit="cover"
        className='cursor-pointer  md:hover:blur-sm rounded-lg md:hover:rounded-lg transition-all ease-in-out duration-150'
      />
      <div className='absolute bottom-0 rounded-lg gradient w-full p-2 transition-all ease-in duration-150'>
        <h1 className=' mb-2 md:group-hover:-translate-y-4 transition-all ease-in duration-150'>{title}</h1>
        <h1 className='text-sm md-2 text-gray-400 md:hidden md:group-hover:block transition-all ease-in duration-300'>{description}</h1>
      </div>
    </div>
  )
}

export default ItemInfo
