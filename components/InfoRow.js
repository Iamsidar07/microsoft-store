import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoRow = ({
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
      <div className=" flex justify-between  bg-gray-800 rounded-md md:hover:-translate-y-2 cursor-pointer transition-transform ease-in-out duration-100 p-2 ">
      <div className="w-full flex items-center justify-start space-x-4">
        <Image
          src={imgSrc}
          width={100}
          height={100}
          objectFit="cover"
          quality={100}
          className="rounded-md p-2 bg-white "
        />
        <div className="space-y-1 text-sm text-gray-500">
          <h1 className="capitalize text-base text-white">{appName}</h1>
          <p>{category}</p>
          <p>
            ✨{rating}
            <span className="pl-1">{noOfVotes}</span>
          </p>
        </div>
      </div>
      <p className="text-sm text-white bg-gray-900 rounded-full h-fit py-1 px-3">free</p>
    </div>
      </Link>
    </>
  );
};

export default InfoRow;
