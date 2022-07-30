import Image from "next/image";

const HomeBg = ({imgSrc,title,description,priceBeforeDiscount,priceAfterDiscount,ifFreeMessage}) => {
  return (
    <div className="">
      <div>
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="left-mask rounded-l-2xl  "
        />
      </div>
      <div className="flex flex-col justify-between h-[45vh] md:h-[50vh] p-2 md:p-5 max-w-2xl z-50 opacity-100">
        <h1 className="text-white cursor-pointer text-xl">Home</h1>
        <div className="space-y-2 text-white">
          <p className="text-green-600 text-xs">
            {ifFreeMessage&& <span className="bg-green-700 text-white  p-2 rounded-full mr-1">{ifFreeMessage}</span>}
            {priceAfterDiscount} <span className="line-through text-gray-500">{priceBeforeDiscount}</span>
          </p>
          <h1 className= "text-xl md:text-3xl">{title}</h1>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
          <button className="bg-gray-800 text-sm text-white border border-gray-900 rounded px-6 py-2 capitalize cursor-pointer hover:bg-gray-900">
            {" "}
            see details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBg;
