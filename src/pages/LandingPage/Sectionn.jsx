import React from 'react'
import { Input, Img, Heading, Text, Button, Slider } from "../../components";
export default function Sectionn() {
  return (
    <div>
            <div className="flex md:flex-col justify-center items-center gap-[34px]">
              <Img src="images/img_frame_35.png" alt="image" className="h-[301px] md:w-full mr-20" />
              <div className="flex flex-col items-start w-[48%] md:w-full gap-[22px]">
                <div className="flex flex-col w-[91%] md:w-full gap-[11px]">
                  <Heading size="lg" as="h2" className="!text-[25.06px]">
                    The unseen of spending three years at Pixelgrade
                  </Heading>
                  <Text size="s" as="p" className="!text-[9.74px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </Text>
                </div>
                <Button shape="round" className="sm:px-5 font-medium min-w-[105px]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
  )
}
