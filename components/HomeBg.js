import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeBg = ({
  imgSrc,
  title,
  description,
  priceBeforeDiscount,
  priceAfterDiscount,
  ifFreeMessage,
}) => {

  const [showFullBg,setShowFullBg]=useState(false);

  return (
    <div
      className={` md:bottom-mask  p-2 md:pl-5  ${showFullBg?"h-[100vh]":"h-[50vh] md:h-[60vh]"} w-full `}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        borderRadius: "10px",
        backgroundAttachment:"fixed",
      }}
    >
      <div className=" relative flex  h-full flex-col justify-center  p-2 md:p-5  z-50 opacity-100">
        <h1 className="hidden md:block text-white cursor-pointer text-xl absolute top-0 left-0 py-3 ">
          Home
        </h1>
        <div className="  bg-orange-500 md:bg-gray-900/40 px-10 py-5 rounded space-y-8 w-full md:w-1/2 max-w-6xl mt-4 text-white">
          <div className="space-y-3">
            <p className="text-green-600 my-2 text-xs">
              {ifFreeMessage && (
                <span className="bg-green-700 text-white  px-4 py-3 rounded-full mr-1">
                  # {ifFreeMessage}
                </span>
              )}
              {priceAfterDiscount}{" "}
              <span className="line-through px-1 text-gray-200">
                {priceBeforeDiscount}
              </span>
            </p>
            <h1 className="text-xl md:text-3xl">{title}</h1>
            <p className="text-white text-sm">{description}</p>
          </div>
          <Link href={`/info/${title}`}>
            <button className="bg-white text-sm text-black  rounded-full px-8 py-3 capitalize cursor-pointer">
              {" "}
              see details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBg;
