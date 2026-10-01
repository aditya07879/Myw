"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// used when the page doesn't pass its own btnStyles
const DEFAULT_BTN =
  "bg-[#FFC900] hover:bg-[#FF90E8] text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center border-2 border-black shadow-[3px_3px_0_0_#000] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

const WorkSliderBtns = ({ containerStyles, btnStyles = DEFAULT_BTN, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        aria-label="Previous project"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      <button
        type="button"
        aria-label="Next project"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;