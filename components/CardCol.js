import React from 'react'
import InfoCol from './InfoCol';

const CardCol = ({rowTitle,rowMessage,apps}) => {
  return (
    <div className=" fadetop px-2 ">
    <div className="w-full h-5 flex items-center justify-between text-white ">
      <p className="text-lg">{rowTitle}</p>
      <p className="text-sky-500 rounded-md text-sm md:hover:bg-gray-800 px-2 py-1 cursor-pointer z-50">
        {rowMessage}
      </p>
    </div>
    <div className=" md:grid sm:grid-cols-3   md:grid-cols-6 gap-3  md:py-3 overflow-x-scroll no-scrollbar  md:overflow-hidden w-full  py-4  flex no-scrollbar">
      {apps.map(
        ({ imgSrc, appName, category, rating, noOfVotes,freeOrPaid }, i) => {
          return (
            <InfoCol key={i} imgSrc={imgSrc} appName={appName} category={category} rating={rating} noOfVotes={noOfVotes} freeOrPaid={freeOrPaid}/>
          );
        }
      )}
    </div>
  </div>
  )
}

export default CardCol
