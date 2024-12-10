import React from "react";
import { ARTICLE3_CARD_LIST } from "./constant";
import Image from "next/image";

const MainArticle3 = () => {
  return (
    <article className="w-full h-auto bg-[#f5f5f5]">
      <div className="w-[1200px] h-auto mx-auto pt-[16rem] pb-[21.3rem]">
        <div className="flex flex-col gap-[3.2rem] items-center justify-start mb-[10rem]">
          <p className="text-center text-[4rem] leading-[5.5rem] font-[700]">
            팬들을 위한
            <br /> 안전한 굿즈 거래 플랫폼
          </p>
          <p className="text-[2rem] font-[500] leading-[2.4rem]">
            K-POP 팬들이 안전하게 거래하고 소통할 수 있는 공간을 제공합니다.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[24]">
          {ARTICLE3_CARD_LIST.map(({ id, src, title, description }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-center items-center w-[28.2rem] shadow-[0_0_6px_rgba(0,0,0,0.3)] rounded-[3.6rem] pt-[3.5rem] pb-[5.6rem]"
              >
                <Image src={src} alt={title} />
                <p className="text-[3.2rem] font-[700] leading-[3.9rem] mt-[3.6rem] mb-[1.5rem]">
                  {title}
                </p>
                <p className="text-[2rem] leading-[2.6rem] font-[500]">
                  {description.split("\n").map((item) => {
                    return (
                      <span
                        className="flex flex-col justify-center items-center"
                        key={item}
                      >
                        {item}
                      </span>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default MainArticle3;
