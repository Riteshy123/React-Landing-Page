import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Header() {
  return (
    <header className="p-[11px] bg-white-A700 shadow-md">
          <div className="w-full mx-auto md:p-5 max-w-[1000px]">
            <div className="flex md:flex-col justify-between items-center gap-10">
              <Text size="2xl" as="p" className="flex !text-black-900 ">
                <span className="text-black-900">P</span>
                <span className="text-green-500">cl</span>
              </Text>
              <div className="flex sm:flex-col justify-end items-center w-[90%] md:w-full gap-[10px] px-px ">
                <div className="flex justify-end flex-1 ml-10">
                  <a href="#" className="self-start">
                    <Text size="xl" as="p" className="!text-gray-800 text-center ml-20">
                      Home
                    </Text>
                  </a>
                  <div className="flex self-start justify-end w-[21%] ">
                    <Text size="xl" as="p" className="!text-gray-800 text-center ml-10">
                      Features
                    </Text>
                  </div>
                  <div className="flex justify-end w-[28%] ml-4">
                    <Text size="xl" as="p" className="!text-gray-800 text-center ml-5">
                      Community
                    </Text>
                  </div>
                  <div className="flex self-end justify-end w-[11%]">
                    <Text size="xl" as="p" className="!text-gray-800">
                      Blog
                    </Text>
                  </div>
                  <div className="flex justify-end ml-4 flex-1">
                    <Text size="xl" as="p" className="!text-gray-800">
                      Pricing
                    </Text>
                  </div>
                </div>
                <Button 
                  shape="round"
                  rightIcon={<Img src="images/img_16_arrows_directions_right.png" alt="16/Arrows & Directions/Right" />}
                  className="gap-[5px] sm:px-5 font-medium min-w-[133px] ml-70"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </header>
  )
}
