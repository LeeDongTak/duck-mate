import React from "react";

import Check from "@/assets/icons/check";
import ArrowBottom from "@/assets/icons/arrow-bottom";
import {
  SUB_ARTICLE_TOW_FILTER_LIST_ONE,
  SUB_ARTICLE_TOW_FILTER_LIST_TWO,
  SUB_ARTICLE_TOW_LIST,
} from "./constant";
import clsx from "clsx";

const SubArticle2 = () => {
  return (
    <article className="flex justify-between items-start w-[1200px] h-auto mx-auto pt-[247px] pb-[10rem]">
      <div className="flex flex-col justify-center items-center gap-[3.5rem] flex-1">
        <h2 className="text-[4rem] leading-[5.5rem] font-[700]">
          굿즈거래, <span className="text-[#7986EF]">덕메이트</span>로
          <br /> 더이상 스트레스 NO!
        </h2>
        <ul className="flex flex-col justify-start gap-[4rem] shadow-[0_0_6px_rgba(202,208,255,1)] py-[9.6rem] px-[4.9rem] rounded-[1rem] border border-solid border-[rgba(202,208,255,0.3)] bg-[rgba(255,255,255,0.3)]">
          {SUB_ARTICLE_TOW_LIST.map(({ id, content }) => {
            return (
              <li key={id} className="flex items-center gap-[1.5rem]">
                <Check />
                <p className="text-[2rem] leading-[2rem] font-[500]">
                  {content}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* //////////// */}
      <div className="flex flex-col justify-center items-center gap-[3.5rem] flex-1">
        <h2 className="text-[4rem] leading-[5.5rem] font-[700]">
          내가 <span className="text-[#7986EF]">원하는 소통</span>만!
          <br /> AI로 완벽한 필터링
        </h2>
        <div className="flex flex-col justify-start items-center gap-[2.4rem] shadow-[0_0_6px_rgba(202,208,255,1)] py-[5.8rem] px-[4.9rem] rounded-[1rem] border border-solid border-[rgba(202,208,255,0.3)] bg-[rgba(255,255,255,0.3)]">
          <ul className="flex justify-center gap-[1.2rem]">
            {SUB_ARTICLE_TOW_FILTER_LIST_ONE.map(({ id, content, isDone }) => {
              return (
                <li
                  key={id}
                  className={clsx(
                    "flex items-center text-[1.6rem] leading-[1.6rem] font-[500]] px-[1.4rem] py-[0.8rem] rounded-full",
                    isDone
                      ? " bg-[#79b6ef] text-[#fff]"
                      : "bg-[#f5f5f5] text-[#3E3E3E]"
                  )}
                >
                  {content}
                </li>
              );
            })}
          </ul>
          <ArrowBottom />
          <ul className="flex justify-center gap-[1.2rem]">
            {SUB_ARTICLE_TOW_FILTER_LIST_TWO.map(({ id, content, isDone }) => {
              return (
                <li
                  key={id}
                  className={clsx(
                    "flex items-center text-[1.6rem] leading-[1.6rem] font-[500]] px-[1.4rem] py-[0.8rem] rounded-full",
                    isDone
                      ? " bg-[#79b6ef] text-[#fff]"
                      : "bg-[#f5f5f5] text-[#3E3E3E]"
                  )}
                >
                  {content}
                </li>
              );
            })}
          </ul>
          <div className="w-[38.4rem] h-[11rem] rounded-[1rem] bg-[#eaeaea]"></div>
        </div>
      </div>
    </article>
  );
};

export default SubArticle2;
