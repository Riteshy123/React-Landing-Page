import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Data() {
  return (
    <div className="flex md:flex-col justify-between items-center gap-5 p-11 md:p-5 bg-gray-100_01">
            <div className="flex flex-col items-start w-[47%] md:w-full ml-[130px] pb-0.5 gap-1.5 ">
              <Heading size="lg" as="h2" className="flex w-[76%] md:w-full !text-[25.06px]">
                <span className="text-gray-800">Helping a local </span>
                
              </Heading>
              <Heading size="lg" as="h2" className="flex w-[76%] md:w-full !text-[25.06px]">
                
                <span className="text-green-500">business reinvent itself</span>
              </Heading>
              <Text size="md" as="p" className="!text-gray-900 !text-[11.14px]">
                We reached here with our hard work and dedication
              </Text>
            </div>
            <div className="w-[47%] md:w-full mr-[80px]">
              <div className="justify-center gap-5 grid-cols-2 md:grid-cols-[1fr] grid">
                <div className="flex items-center w-full gap-[11px]">
                  <Img src="images/img_icon_green_500_33x33.png" alt="image" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start py-px">
                    <Heading size="s" as="h3" className="!text-[19.49px]">
                      2,245,341
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Members
                    </Text>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full gap-[11px]">
                  <Img src="images/img_icon_green_500.png" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start py-0.5">
                    <Heading size="s" as="h4" className="!text-[19.49px]">
                      46,328
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Clubs
                    </Text>
                  </div>
                </div>
                <div className="flex items-center w-full gap-[11px]">
                  <Img src="images/img_icon_33x33.png" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start justify-center py-px">
                    <Heading size="s" as="h5" className="!text-[19.49px]">
                      828,867
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Event Bookings
                    </Text>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full gap-[11px]">
                  <Img src="images/img_icon_1.png" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start justify-center py-px">
                    <Heading size="s" as="h6" className="!text-[19.49px]">
                      1,926,436
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Payments
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
