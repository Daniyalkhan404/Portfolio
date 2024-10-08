"use client";

import React from 'react'
import { useSwiper } from 'swiper/react';
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";


const WorkSliderbtns = ({containerStyles="", btnsStyles="", iconsStyles=""}) => {
  const swiper = useSwiper();
    return (
    <div className={containerStyles}>
      <button className={btnsStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnsStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles}/>
      </button>
    </div>
  )
}

export default WorkSliderbtns
