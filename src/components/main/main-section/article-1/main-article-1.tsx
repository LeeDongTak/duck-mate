import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/images/logo.png";

const MainArticle1 = () => {
  return (
    <article className="w-[1200px] mx-auto">
      <div className="pt-[33.2rem] pb-[22.8rem]">
        <div className="font-[500]">
          <p className="text-[2.4rem] mb-[2.5rem]">
            팬이 만들어 더 편리하고 안전한
          </p>
          <p className="text-[3.2rem]">
            K-POP 팬들을 위한
            <span className="font-[700] text-[#f9be00]">안전한</span>
            굿즈 거래 플랫폼
          </p>
        </div>
        <div className="mt-[6.2rem] mb-[5.5rem]">
          <Image src={Logo} alt="로고이미지" width={335} height={120} />
        </div>
        <div className="flex gap-[2.4rem] font-[700] text-[2rem]">
          <button className="w-[18rem] h-[6rem] rounded-full bg-[#F9BE00] text-white">
            더알아보기
          </button>
          <button className="w-[18rem] h-[6rem] rounded-full border border-[#7986EF] border-solid text-[#7986EF]">
            문의하기
          </button>
        </div>
      </div>
    </article>
  );
};

export default MainArticle1;
