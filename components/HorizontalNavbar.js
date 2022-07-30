import Image from "next/image";
import React from "react";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import { VerifiedOutlined } from "@mui/icons-material";
const HorizontalNavbar = () => {
  return (
    <nav className="h-14 text-sm flex items-center justify-between p-3 w-screen fixed top-0 left-0 right-0 bg-gray-900 pr-5">
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
        <p className=" pl-2 text-white md:group-hover:text-green-600 ">Microsoft store</p>
      </div>
    </Link>
      <div className="hidden md:flex items-center justify-center relative ">
        <input
          type="text"
          placeholder="Search apps,games,movies and more"
          className="px-4 py-2 text-sm border-none w-96 bg-gray-800 text-white  rounded outline-none flex-1 placeholder:text-white"
        />
        <SearchOutlinedIcon className="absolute right-0 mr-1 text-white cursor-pointer " />
      </div>

      <div className="relative">
        <Avatar
          src="/img/user.jpeg"
          style={{ bgColor: "black" }}
          className="cursor-pointer "
        />
        {/* <VerifiedOutlined className="text-green-400 absolute bottom-0 right-0"/> */}
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
