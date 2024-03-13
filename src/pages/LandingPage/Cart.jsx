import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Cart() {
  return (
    <div className="flex md:flex-col justify-between gap-5 p-[22px] sm:p-5 bg-gray-100_01">
            <Img
              src="images/img_image_9.png"
              alt="imagenine_one"
              className="w-[226px] ml-[77px] object-cover rounded-[5px]"
            />
            

            <div className="flex flex-col w-[65%] md:w-full mr-[77px] gap-[22px]">
              <div className="flex flex-col gap-[11px]">
                <Text size="md" as="p" className="!text-[11.14px] !font-medium !leading-4">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                  placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </Text>
                <div className="flex flex-col self-start items-start gap-[9px] py-px">
                  <Heading as="h2" className="!text-green-500 !text-[13.92px]">
                    Tim Smith
                  </Heading>
                  <Text size="md" as="p" className="!text-blue_gray-400 !text-[11.14px]">
                    British Dragon Boat Racing Association
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col justify-between items-center gap-5">
                <Img src="images/img_frame_10.png" alt="image_two" className="h-[33px] sm:w-full" />
                <div className="flex justify-end items-center gap-[7px] py-[5px]">
                  <Heading as="h3" className="!text-green-500 !text-[13.92px]">
                    Meet all customers
                  </Heading>
                  <Img
                    src="images/img_24_arrows_directions_right.png"
                    alt="24arrows_one"
                    className="h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
           </div>
  )
}
