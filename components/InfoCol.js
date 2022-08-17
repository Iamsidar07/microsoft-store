import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoCol = ({
  imgSrc,
  appName,
  category,
  rating,
  noOfVotes,
  freeOrPaid,
}) => {
  return (
    <>
      <Link href={`/info/${appName}`}>
      <div className=" flex flex-col  space-y-3 justify-between  bg-gray-800 rounded-md md:hover:-translate-y-3 md:hover:bg-gray-800/70 cursor-pointer transition-transform ease-in-out duration-200 p-2  ">
        <div className="min-w-[120px] mx-auto w-full text-center  rounded-md ">
          <Image
            layout="responsive"
            src={imgSrc}
            width={1080}
            height={1080}
            objectFit="cover"
            quality={100}
            className="max-w-sm rounded"
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
      </Link>
    </>
  );
};

export default InfoCol;
