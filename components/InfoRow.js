import React from "react";
import Image from "next/image";

const InfoRow = ({
  imgSrc,
  appName,
  category,
  rating,
  noOfVotes,
  freeOrPaid,
}) => {
  return (
    <div className="min-w-full flex   justify-between items-end bg-gray-800 rounded-md md:hover:-translate-y-1 cursor-pointer transition-transform ease-in-out duration-100 p-2 ">
      <div className=" flex items-center space-x-2">
        <Image
          src={imgSrc}
          width={70}
          height={70}
          objectFit="cover"
          quality={100}
          className="rounded-md p-2 bg-white "
        />
        <div className="space-y-1 text-sm text-gray-500">
          <h1 className="capitalize text-base text-white">{appName}</h1>
          <p>{category}</p>
          <p>
            {rating}
            <span className="pl-1">{noOfVotes}</span>
          </p>
        </div>
      </div>
      <p className="text-sm text-white">{freeOrPaid}</p>
    </div>
  );
};

export default InfoRow;
