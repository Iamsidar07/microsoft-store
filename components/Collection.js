import React from 'react'
import ItemInfo from './ItemInfo'
const Collection = ({heading,subHeading,labels}) => {
  return (
    <div className=" fadetop">
    <div className="w-full h-5 flex items-center justify-between text-white ">
      <p className="text-lg">{heading}</p>
      <p className="text-sky-500 rounded-md text-sm hover:bg-gray-800 px-2 py-1 cursor-pointer z-50">
        {subHeading}
      </p>
    </div>
    <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-3  space-y-4 md:space-y-0 py-2 md:py-3 overflow-x-scroll no-scrollbar ">
      {labels.map(({ imgSrc, title, description }, i) => {
        return (
          <div key={i} >
            <ItemInfo
              imgSrc={imgSrc}
              title={title}
              description={description}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Collection
