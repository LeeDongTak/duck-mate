import Image from "next/image";
import React from "react";
import MockUp from "../../../../../public/images/mock up.png";
import MockUpShadow from "../../../../../public/images/mock up shadow.png";

const MainArticle2 = () => {
  return (
    <article className="article-gradient w-full h-auto">
      <div className="w-[1200px] mx-auto flex justify-between items-center ">
        <div className="flex flex-col justify-center items-start gap-[4rem]">
          <div className="flex flex-col justify-center items-center w-[48.6rem] h-[20rem] bg-mainColor rounded-[3.6rem] shadow-[0_0_6px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-[2rem]">
              <p className="text-[2.4rem] font-[600] text-[#3e3e3e]">
                K-POP 팬이 만든, 팬을 위한
              </p>
              <p className="text-[4rem] font-[700] text-white">
                안전한 굿즈 거래 플랫폼
              </p>
            </div>
          </div>
          <div className="text-[2rem] leading-[30px] font-[500]">
            팬들의 불편함이 무엇인지 가장 잘 아는 곳. <br />
            팬들의 공감으로 만들어진 공간에서 더 즐거운 팬 활동을 경험해보세요.
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <Image src={MockUp} alt="목업 이미지" />
          <Image src={MockUpShadow} alt="목업 그림자 이미지" />
        </div>
      </div>
    </article>
  );
};

export default MainArticle2;
