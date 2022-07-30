import InfoCol from './InfoCol';

const Banner = ({bannerTitle,bannerDescription,actionText,apps}) => {
  return (
    <div className=" h-[40vh] md:h-[60vh] px-2 md:px-5  flex flex-col md:flex-row items-center justify-center md:justify-between fadetop rounded-md">
    <div className="w-full md:max-w-sm flex items-center justify-center text-white ">
      <div className="text-sm">
        <h1 className="text-lg md:text-2xl">{bannerTitle}</h1>
        <p className="text-sm">
          {bannerDescription}
        </p>
        <button className=" md:w-36 w-full rounded-full bg-gray-800/70 mt-3 text-sm text-white border border-gray-900 md:rounded px-6 py-2 capitalize cursor-pointer md:hover:bg-gray-900">
          {" "}
          {actionText}
        </button>
      </div>
    </div>
    <div className="hidden  w-full max-w-md   md:grid  md:grid-cols-3 md:gap-1">
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

export default Banner
