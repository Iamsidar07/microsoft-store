import { HomeOutlined } from "@material-ui/icons";
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import React from "react";

const VerticalNavbar = () => {

  return (
    <div className="flex text-white h-[100vh]  items-center justify-between flex-col  w-14 vertical-height text-xs sticky bottom-0 left-0 top-[3.5rem] z-40 bg-gray-900"  >
      <div className="space-y-1">
        <div className="  flex items-center justify-center md:flex-col group cursor-pointer md:hover:bg-gray-800  rounded-md p-1">
          <HomeOutlined className=" md:group-hover:text-sky-700   " />
          <span className="  hidden  md:flex  md:opacity-0 md:group-hover:opacity-100  transition-all ease-in duration-100 ">
            Home
          </span>
        </div>
        <div className="flex items-center justify-center md:flex-col group cursor-pointer p-1 md:hover:bg-gray-800 rounded-md " >
          <AppsIcon className="md:group-hover:text-sky-700   " />
          <span className=" hidden  md:flex md:opacity-0 md:group-hover:opacity-100  transition-all ease-in duration-100">
            Apps
          </span>
        </div>
        <div className="flex items-center justify-center md:flex-col group cursor-pointer p-1 md:hover:bg-gray-800 rounded-md "> 
          <SportsEsportsIcon className="md:group-hover:text-sky-700  " />
          <span className=" hidden md:flex  md:opacity-0 md:group-hover:opacity-100 transition-all ease-in duration-100 ">
            Gaming
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center md:flex-col group cursor-pointer p-1  md:hover:bg-gray-800 rounded-md ">
          <LibraryAddCheckIcon className="md:group-hover:text-sky-700  " />
          <span className=" hidden md:flex  md:opacity-0 md:group-hover:opacity-100  transition-all ease-in duration-100">
            Library
          </span>
        </div>
        <div className="flex items-center justify-center md:flex-col group cursor-pointer   p-1 md:hover:bg-gray-800 rounded-md ">
          <HelpOutlineOutlinedIcon className="md:group-hover:text-sky-700  " />
          <span className=" hidden md:flex   md:opacity-0 md:group-hover:opacity-100 transition-all ease-in duration-100">
            Help
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
