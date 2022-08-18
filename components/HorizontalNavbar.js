import Image from "next/image";
import React from "react";
import SearchOutlinedIcon  from "@material-ui/icons/SearchOutlined";
import Link from "next/link";

import { Avatar } from "@material-ui/core";
const HorizontalNavbar = () => {
  return (
    <nav className=" space-x-2 text-sm flex items-center  justify-between px-2 py-3 w-screen fixed top-0 left-0 right-0 bg-gray-900 pr-5">
    <Link href={"/game"}>
      <div className="flex items-center justify-center group cursor-pointer">
        <div className="relative w-6 h-6 ">
          <Image
            layout="fill"
            src={"/img/logo.png"}
            objectFit="contain"
            priority
          />
        </div>
        <p className="hidden md:block pl-2 text-white md:group-hover:text-green-600 ">Microsoft store</p>
      </div>
    </Link>
      <div className="flex flex-1 rounded bg-gray-800 md:max-w-sm items-center justify-center relative ">
        <input
          type="text"
          placeholder="Search apps,games,movies and more"
          className=" w-full  text-xs truncate py-2 px-2  border-none  bg-transparent text-white  rounded outline-none  placeholder:text-white "
        />
        <SearchOutlinedIcon className=" absolute right-0 mr-2 text-white cursor-pointer " />
      </div>

      <div className="relative hidden md:block ">
        <Avatar
          src="/img/user.png"
          style={{ bgColor: "black" }}
          className="cursor-pointer "
        />
       
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
