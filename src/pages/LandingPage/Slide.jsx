import React from 'react'
import { useState } from 'react';
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Slide() {

    const [sliderState, setSliderState] = useState(0);
     const sliderRef = React.useRef(null);
  return (
    <div className="h-[460px] relative">
    <Slider
      autoPlay
      autoPlayInterval={2000}
      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
      renderDotsItem={(props) => {
        return props?.isActive ? (
          <div className="h-[6px] w-[6px] mr-[5.57px] bg-green-500" />
        ) : (
          <div className="h-[6px] w-[6px] mr-[5.57px] bg-green_500_75" />
        );
      }}
      activeIndex={sliderState}
      onSlideChanged={(e) => {
        setSliderState(e?.item);
      }}
      ref={sliderRef}
      className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
      items={[...Array(3)].map(() => (
        <React.Fragment key={Math.random()}>
          <div className="flex md:flex-col justify-between items-center gap-5 p-[66px] mx-auto md:p-5 bg-gray-100_01">
            <div className="flex flex-col items-start w-[57%] md:w-full ml-[85px] gap-[22px]">
              <div className="flex flex-col self-stretch gap-[13px]">
                <Heading size="xl" as="h1" className="flex !text-[44.55px]">
                  <div className="text-gray-800">Lessons and insights </div>
                </Heading>
                <Heading size="xl" as="h1" className="flex !text-[44.55px]">
                  <div className="text-green-500">from 8 years</div>
                </Heading>
                <Text size="md" as="p" className="!text-[11.14px]">
                  Where to grow your business as a photographer: site or social media?
                </Text>
              </div>
              <Button shape="round" className="sm:px-5 font-medium min-w-[89px]">
                Register
              </Button>
            </div>
            <Img
              src="images/img_illustration.png"
              alt="illustration"
              className="h-[283px] md:w-full mr-[85px]"
            />
          </div>
        </React.Fragment>
      ))}
    />
  </div>
  )
}
