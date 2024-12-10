import Image from "next/image";
import React from "react";
import { SPEECH_BUBBLE_LIST } from "./constnat";
import clsx from "clsx";

const SubArticle1 = () => {
  return (
    <article className="w-[1200px] h-auto mx-auto py-[21rem]">
      {SPEECH_BUBBLE_LIST.map(({ id, content, src, backGround }) => {
        return (
          <div
            key={id}
            className={clsx(
              "flex justify-center items-center gap-[2.4rem]",
              id === 1 && "flex-row-reverse"
            )}
          >
            <Image src={src} alt={content} />
            <div
              className={`
                flex justify-center items-center font-[500] text-[1.8rem] 
                w-[38.4rem] h-[13rem] rounded-[2rem] ${backGround}
              `}
            >
              {content}
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default SubArticle1;
