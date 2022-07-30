import React from "react";
import Image from "next/image";

const InfoCol = ({
  imgSrc,
  appName,
  category,
  rating,
  noOfVotes,
  freeOrPaid,
}) => {
  return (
    <div className="min-w-full  flex flex-col  space-y-3 justify-between items-start bg-gray-800 rounded-md md:hover:-translate-y-1 md:hover:bg-gray-900/10 cursor-pointer transition-transform ease-in-out duration-200 p-2  ">
      <div className="mx-auto w-full text-center  rounded-md ">
        <Image
          layout="responsive"
          src={imgSrc}
          width={1080}
          height={1120}
          objectFit="cover"
          quality={100}
          className="max-w-sm"
        />
      </div>

      <div className="space-y-1 text-sm text-gray-500">
        <h1 className="capitalize text-base text-white">{appName}</h1>
        <p>{category}</p>
        <p>
          {rating}
          <span className="pl-1">{noOfVotes}</span>
        </p>
        <p className="text-sm text-white">{freeOrPaid}</p>
      </div>
    </div>
  );
};

export default InfoCol;
