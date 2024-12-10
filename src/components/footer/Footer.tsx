import React from "react";

const Footer = () => {
  const FOOTER_INFO = [
    "(주)위드스탠",
    "line1",
    "대표 : 현승환",
    "line2",
    "사업자 등록번호 : 123-45-67890",
    "line3",
    "ka9430@naver.com",
  ];
  return (
    <footer className="w-full h-[27rem] bg-[#3e3e3e]">
      <div className="flex flex-col justify-center items-start w-[1200px] h-full mx-auto text-[#FFF5D6] text-[1.2rem] font-[500]">
        <p className="flex justify-start items-start gap-[1.2rem] mb-[1.5rem]">
          {FOOTER_INFO.map((item) => {
            return !item.includes("line") ? (
              <span key={item}>{item}</span>
            ) : (
              <span key={item} className="w-[1px] h-full bg-[#FFF5D6]"></span>
            );
          })}
        </p>
        <p className="mb-[3rem]">
          서울시 강동구 올림픽로 610, 천호역 효성해링턴타워 2층 2호(05385)
        </p>
        <p>COPYRIGHT 2024 withstan. ALL RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
