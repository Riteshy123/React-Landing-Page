import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function Clients() {
  return (
    <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center w-full gap-2 mx-auto md:p-5 max-w-[772px]">
              <Heading size="lg" as="h2" className="text-center !text-[25.06px]">
                Our Clients
              </Heading>
              <Text size="md" as="p" className="text-center !text-[11.14px]">
                We have been working with some Fortune 500+ clients
              </Text>
            </div>
            <Img
              src="images/img_clients_logos.png"
              alt="clientslogos"
              className="h-[68px] w-full mx-auto md:p-10 max-w-[1050px]"
            />
          </div>
  )
}
