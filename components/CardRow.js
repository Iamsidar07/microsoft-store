import React from 'react'
import InfoRow from './InfoRow';

const CardRow = ({rowTitle,rowMessage,apps}) => {
  return (
    <div className="  fadetop ">
    <div className="w-full h-5 flex items-center justify-between text-white ">
      <p className="text-lg">{rowTitle}</p>
      <p className="text-sky-500 rounded-md text-sm md:hover:bg-gray-800 px-2 py-1 cursor-pointer z-50">
        {rowMessage}
      </p>
    </div>
    <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-3  py-2 md:py-3 overflow-x-scroll no-scrollbar ">
      {apps.map(
        ({ imgSrc, appName, category, rating, noOfVotes,freeOrPaid }, i) => {
          return (
            <InfoRow key={i} imgSrc={imgSrc} appName={appName} category={category} rating={rating} noOfVotes={noOfVotes} freeOrPaid={freeOrPaid}/>
          );
        }
      )}
    </div>
  </div>
  )
}

export default CardRow
