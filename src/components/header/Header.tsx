import localFont from "next/font/local";
import React from "react";

const ownglyphMeetme = localFont({
  src: "../../app/fonts/온글잎 밑미.ttf",
});

const Header = () => {
  return (
    <header className="w-full h-[6rem] bg-mainColor">
      <div className="flex justify-between items-center w-[1200px] h-full mx-auto">
        <p className={`text-[3.5rem] font-[400] ${ownglyphMeetme.className}`}>
          <span className="text-[#BABC6D]">duck</span>
          <span className="text-[#4C7090]">mate</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
