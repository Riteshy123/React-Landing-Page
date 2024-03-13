import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Community() {
  return (
    <div className="flex flex-col gap-[11px]">
            <div className="flex flex-col items-center pb-0.5 gap-1.5">
              <Heading size="lg" as="h2" className="w-[38%] md:w-full text-center !text-[25.06px]">
                Manage your entire community in a single system
              </Heading>
              <Text size="md" as="p" className="text-center !text-[11.14px]">
                Who is Nextcent suitable for?
              </Text>
            </div>
            <div className="flex md:flex-col w-full gap-[88px] mx-auto md:p-5 max-w-[1100px]">
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon.png" alt="image" className="h-[38px]" />
                  <Heading size="s" as="h3" className="text-center !text-[19.49px] !leading-[25px]">
                    Membership Organisations
                  </Heading>
                </div>
                <Text size="s" as="p" className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]">
                  Our membership management software provides full automation of membership renewals and payments
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon_green_50.png" alt="icon_one" className="h-[38px]" />
                  <Heading size="s" as="h4" className="text-center !text-[19.49px] !leading-[25px]">
                    National Associations
                  </Heading>
                </div>
                <div className="flex justify-center w-[90%] md:w-full mb-[5px]">
                  <Text size="s" as="p" className="text-center !text-[9.74px]">
                    Our membership management software provides full automation of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon_green_50_38x45.png" alt="icon_one" className="h-[38px]" />
                  <Heading size="s" as="h5" className="w-[87%] md:w-full text-center !text-[19.49px] !leading-[25px]">
                    Clubs And Groups
                  </Heading>
                </div>
                <Text size="s" as="p" className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]">
                  Our membership management software provides full automation of membership renewals and payments
                </Text>
              </div>
            </div>
          </div>
  )
}
