import React from 'react'

import { Input, Img, Heading, Text, Button, Slider } from "../../components";
import { SiInstagram } from "react-icons/si";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function () {
  return (
    <footer className="p-11 md:p-5 bg-blue_gray-900_01">
            <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1100px]">
              <div className="flex flex-col items-start w-[32%] md:w-full gap-[27px]">
                <div className="flex flex-col items-start gap-0.5">
                  <Text as="p" className="!text-gray-100_01">
                    Copyright © 2020 Ritesh Kumar Yadav.
                  </Text>
                  <a href="#">
                    <Text as="p" className="!text-gray-100_01">
                      All rights reserved
                    </Text>
                  </a>
                </div>
                <div className="flex gap-[11px]">
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                   <SiInstagram />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                  <FaEarthAmericas />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                  <FaTwitter />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                  <FaYoutube />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center w-[57%] md:w-full gap-5">
                <div className="flex flex-col items-center flex-1">
                  <div className="flex flex-col items-start w-[59%] md:w-full gap-3">
                    <Heading size="md" as="h5" className="self-center !text-white-A700">
                      Company
                    </Heading>
                    <ul className="flex flex-col items-start gap-[5px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Contact us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Pricing
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Testimonials
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="flex flex-col items-start w-[69%] md:w-full gap-3">
                    <Heading size="md" as="h5" className="!text-white-A700">
                      Support
                    </Heading>
                    <ul className="flex flex-col items-start gap-[5px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Help center
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Legal
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Privacy policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Status
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col self-start w-[42%] gap-3">
                  <Heading size="md" as="h5" className="!text-white-A700">
                    Stay up to date
                  </Heading>
                  <Input
                    shape="round"
                    type="email"
                    name="date"
                    placeholder="Your email address"
                    suffix={<Img src="images/img_essential_icons_send.png" alt="Essential Icons / send" />}
                  />
                </div>
              </div>
            </div>
          </footer>
  )
}
