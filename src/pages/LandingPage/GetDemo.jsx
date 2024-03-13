import React from 'react'

import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function() {
  return (
    
    <div className="flex flex-col items-center gap-[22px] p-[22px] sm:p-5 bg-gray-100_01">
            <Heading size="xl" as="h2" className="w-[64%] md:w-full !text-blue_gray-900_01 text-center !text-[44.55px]">
              Lorem ipsum dolor sit amet consectetuer
            </Heading>
            <Button
              shape="round"
              rightIcon={<Img src="images/img_16_arrows_directions_right.png" alt="16/Arrows & Directions/Right" />}
              className="gap-[5px] sm:px-5 font-medium min-w-[124px]"
            >
              Get a Demo
            </Button>
          </div>
  )
}
