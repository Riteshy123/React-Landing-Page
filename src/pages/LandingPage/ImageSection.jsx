import React from 'react'

import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function ImageSection() {
  return (
    

    <div className="flex flex-col gap-[11px]">
            <div className="flex flex-col items-center w-full gap-[3px] mx-auto md:p-5 max-w-[772px]">
              <Heading size="lg" as="h2" className="text-center !text-[25.06px]">
                Caring is the new marketing
              </Heading>
              <Text size="md" as="p" className="w-[57%] md:w-full text-center !text-[11.14px] !leading-4">
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See
                who&#39;s joining the community, read about how our community are increasing their membership income and
                lot&#39;s more.​
              </Text>
            </div>
            <div className="flex md:flex-col w-full gap-4 mx-auto md:p-5 max-w-[1170px]">
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_18.png"
                    alt="imageeighteen"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[11px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="h3" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </Heading>
                    <div className="flex justify-center items-center gap-[5px] p-[7px]">
                      <Heading as="h4" className="!text-green-500 !text-[13.92px]">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.png"
                        alt="readmore_two"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_19.png"
                    alt="imagenineteen"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[18px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="h5" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      What are your safeguarding responsibilities and how can you manage them?
                    </Heading>
                    <div className="flex justify-center items-center mb-[7px] gap-[5px]">
                      <Heading as="h6" className="!text-green-500 !text-[13.92px]">
                        Readmore
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
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_20.png"
                    alt="imagetwenty_one"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[11px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="p" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      Revamping the Membership Model with Triathlon Australia
                    </Heading>
                    <div className="flex justify-center items-center gap-[5px] p-[7px]">
                      <Heading as="p" className="!text-green-500 !text-[13.92px]">
                        Readmore
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
            </div>
          </div>
  )
}
