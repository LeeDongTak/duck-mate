const COMMON_SPEECH_BUBBLE = {
  backgroundBlendMode: "overlay",
  border: "1px solid #CAD0FF",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(50px)",
};

export const newUtilities = {
  ".article-gradient": {
    background: "linear-gradient(to bottom, white 0% 45%, #f5f5f5 45%)",
  },
  ".sub-section-bg": {
    background: "linear-gradient(to bottom, #B8BFF5 0, white 100%)",
  },
  ".speech-bubble-one": {
    ...COMMON_SPEECH_BUBBLE,
    background:
      "linear-gradient(97.43deg, rgba(255, 255, 255, 0.3) 0%, rgba(153, 153, 153, 0.1) 94.45%)",
  },
  ".speech-bubble-two": {
    ...COMMON_SPEECH_BUBBLE,
    background:
      "linear-gradient(97.43deg, rgba(255, 255, 255, 0.3) 0%, rgba(153, 153, 153, 0.1) 94.45%)",
  },
  ".speech-bubble-three": {
    ...COMMON_SPEECH_BUBBLE,
    background:
      "linear-gradient(46.88deg, rgba(255, 255, 255, 0.3) 9.62%, rgba(153, 153, 153, 0.1) 64.29%)",
  },
};
