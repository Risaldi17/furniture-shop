import { Box, Flex, Image, Link, SimpleGrid, Stack, Stat, StatNumber, Text } from "@chakra-ui/react";

const Product = () => {
  return (
    <Box paddingBottom={"30px"}>
      <Flex direction={"column"} textAlign={"center"} px={"450px"}>
        <Text fontSize={"38px"} fontWeight={"600"}>
          All Product
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} textColor={"#23262F"}>
          The products we provide only for you as our service are selected from the best products with number 1 quality in the world
        </Text>
      </Flex>
      <Flex py={"60px"} px={"100px"}>
        <SimpleGrid columns={[2, null, 4]} spacing="30px">
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Image src="lampu.png" width={"293px"} height={"285px"} />
            <Link>
              <Stack alignItems={"end"} px={"30px"}>
                <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                  <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Stack>
            </Link>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Ceiling Light
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $70.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $85.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="kursi.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Wood Chair
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $50.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $70.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="lemari.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Papper Cupboard
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $105.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $120.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="kasur.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Ole Gundorse Spring
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $82.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $100.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="meja.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"} px={"30px"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Treos Seroes 911
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $200.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $210.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="ornament.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Multi bilderman slibber
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $45.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $50.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="dapur.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              XORA corner desk
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $320.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $325.00
              </StatNumber>
            </Stat>
          </Box>
          <Box bg="white" height="auto" width="290px" boxShadow={"lg"} py={"20px"}>
            <Box width={"250px"}>
              <Image src="lemari kecil.png" width={"293px"} height={"285px"} />
              <Link>
                <Stack alignItems={"end"}>
                  <svg width="30" height="30" po viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                    <path d="M15 8V22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15H22" stroke="#23262F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Stack>
              </Link>
            </Box>
            <Text fontSize="24px" fontWeight="600" pt={"20px"} px={"30px"}>
              Black Forest Series
            </Text>
            <Stat px={"30px"}>
              <StatNumber fontSize={"16px"} fontWeight={"400"}>
                $225.00
              </StatNumber>
              <StatNumber fontSize={"14px"} fontWeight={"400"} as="s">
                $240.00
              </StatNumber>
            </Stat>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Product;
