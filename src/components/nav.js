import React from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';
const Nav = () => {
  return <div className="flex justify-between mx-10">
    <div className="text-white text-sm font-bold flex flex-col justify-center items-center w-16 space-y-1">
      <div className="space-x-1">
        <span className="text-center bg-black px-[6px] py-[4px] rounded-xl bg-opacity-80">ux</span>
        <span className="p-[3px] rounded-full bg-[#DF52FF]"><CallMadeIcon style={{ fontSize: '1rem' }} /> </span>
      </div>
      <span className="text-center bg-black p-[2px] rounded-xl bg-opacity-80 w-14">Stuff</span>
    </div>

    <div className="flex justify-center space-x-2">
      <p className="text-[#DF52FF] "><a href="https://www.google.com" className="hover:underline">Login</a></p>
      {/* star */}
      <p className="">
        *
      </p>
    </div>
  </div>;
};

export default Nav;
