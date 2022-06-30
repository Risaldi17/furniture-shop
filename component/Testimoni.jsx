import { Avatar, Box, Flex, HStack, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import ReactSwipe from "react-swipe";

const Carousel = () => {
  let reactSwipeEl;

  return (
    <Box ml={"100px"}>
      <ReactSwipe className="carousel" swipeOptions={{ continuous: true }} ref={(el) => (reactSwipeEl = el)}>
        <Box>
          <HStack>
            <Box width={"600px"} height={"auto"}>
              <HStack spacing={"25px"} py={"25px"}>
                <Wrap>
                  <WrapItem>
                    <Avatar name="user" src="https://bit.ly/sage-adebayo" />
                  </WrapItem>
                </Wrap>
                <Box>
                  <Text fontSize={"20px"} fontWeight={"600"}>
                    Polly Shelby
                  </Text>
                  <Text fontSize={"14px"} fontWeight={"400"} textColor={"#23262F"}>
                    Manager of The Shelby Limited Company
                  </Text>
                </Box>
              </HStack>
              <Text fontSize={"20px"} fontWeight={"400"} textColor={"#23262F"}>
                “They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”
              </Text>
            </Box>
            <Stack>
              <Image src="testi.png" w={"562px"} h={"340px"} />
            </Stack>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Box width={"600px"} height={"auto"}>
              <HStack spacing={"25px"} py={"25px"}>
                <Wrap>
                  <WrapItem>
                    <Avatar name="user" src="https://bit.ly/prosper-baba" />
                  </WrapItem>
                </Wrap>
                <Box>
                  <Text fontSize={"20px"} fontWeight={"600"}>
                    Thomas Shelby
                  </Text>
                  <Text fontSize={"14px"} fontWeight={"400"} textColor={"#23262F"}>
                    Chairman of The Shelby Limited Company
                  </Text>
                </Box>
              </HStack>
              <Text fontSize={"20px"} fontWeight={"400"} textColor={"#23262F"}>
                “They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”
              </Text>
            </Box>
            <Stack>
              <Image src="6.png" w={"562px"} h={"340px"} />
            </Stack>
          </HStack>
        </Box>
      </ReactSwipe>
      <HStack spacing={"30px"} mt={"-30px"}>
        <button onClick={() => reactSwipeEl.next()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12L5 12" stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button onClick={() => reactSwipeEl.prev()}>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_209_142)">
              <circle cx="35" cy="31" r="25" fill="#286F6C" />
            </g>
            <path d="M28 31H42" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35 24L42 31L35 38" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
              <filter id="filter0_d_209_142" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0591667 0 0 0 0 0.10705 0 0 0 0 0.2 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_209_142" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_209_142" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </HStack>
    </Box>
  );
};

const Testimoni = () => {
  return (
    <Box paddingBottom={"20px"}>
      <Flex direction={"row"} px="100px">
        <Box width={"636px"} height={"auto"}>
          <Text fontSize={"38px"} fontWeight={"600"} mb={"-50px"}>
            What people are saying about us
          </Text>
        </Box>
      </Flex>
      <Carousel />
    </Box>
  );
};

export default Testimoni;
