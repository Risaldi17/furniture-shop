import { Box, Flex, Image, Text, Svg, Stack, HStack, SimpleGrid, Link } from "@chakra-ui/react";

const Market = () => {
  return (
    <Box paddingBottom={"50px"}>
      <Flex direction={"row"} gap={"60px"} pt={"100px"}>
        <Box ml={"110px"} py={"85px"}>
          <Image src="1.png" w={"430px"} h={"340px"} borderRadius={"5px"} ml={"30px"} />
        </Box>
        <Box width={"675px"} height={"auto"} py={"75px"}>
          <Text fontSize={"40px"} fontWeight={"600"}>
            We Create your home more aestetic
            <Text fontSize={"20px"} fontWeight={"400"} mt={"13px"} textColor={"#23262F"}>
              Furnitre power is a software as services for multiperpose business management system,
            </Text>
          </Text>
          <HStack spacing={"16px"} mt={"35px"}>
            <Stack>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRrule="evenodd"
                  clipRule="evenodd"
                  d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z"
                  fill="#23262F"
                />
              </svg>
            </Stack>
            <Box>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Valuation Services
              </Text>
              <Text fontSize={"16px"} fontWeight={"400"} mt={"8px"}>
                Sometimes features require a short description. This can be detailed description
              </Text>
            </Box>
          </HStack>
          <HStack spacing={"16px"} mt={"35px"}>
            <Stack>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.55469 16.0001C3.55469 9.12723 9.12626 3.55566 15.9991 3.55566C19.2996 3.55566 22.4649 4.86677 24.7987 7.20056C27.1325 9.53434 28.4436 12.6996 28.4436 16.0001C28.4436 22.873 22.872 28.4446 15.9991 28.4446C9.12626 28.4446 3.55469 22.873 3.55469 16.0001ZM15.6379 20.617L21.8602 14.3948C22.3481 13.9068 22.3481 13.1157 21.8602 12.6277C21.3722 12.1397 20.581 12.1397 20.093 12.6277L14.7544 17.9788L11.9046 15.1166C11.5889 14.8009 11.1289 14.6776 10.6976 14.7932C10.2664 14.9087 9.92963 15.2455 9.81409 15.6767C9.69855 16.1079 9.82183 16.568 10.1375 16.8837L13.8708 20.617C14.1045 20.8526 14.4226 20.9851 14.7544 20.9851C15.0862 20.9851 15.4043 20.8526 15.6379 20.617Z"
                  fill="#23262F"
                />
              </svg>
            </Stack>
            <Box>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Development of Furniture Modelss
              </Text>
              <Text fontSize={"16px"} fontWeight={"400"} mt={"8px"}>
                Sometimes features require a short description. This can be detailed description
              </Text>
            </Box>
          </HStack>
        </Box>
      </Flex>
      <Flex w={"1440px"} h={"auto"} py={"30px"} pl={"130px"}>
        <SimpleGrid columns={5} spacing="20px">
          <Box bg="white" height="400px" width={"200px"}>
            <Text fontSize={"40px"} fontWeight={"600"}>
              New In Store Now
            </Text>
            <Text fontSize={"16px"} fontWeight={"400"} mt={"70px"}>
              Get the latest items immediately with promo prices
            </Text>
            <Link>
              <HStack spacing={"10px"} mt={"48px"} paddingRight={"20px"}>
                <Text as="u" fontSize={"14px"} fontWeight={"600"} textColor={"#23262F"}>
                  Check All
                </Text>
                <Stack>
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
                      fill="#23262F"
                    />
                  </svg>
                </Stack>
              </HStack>
            </Link>
          </Box>
          <Box bg="white" height="400px">
            <Link>
              <Image src="1.png" w={"225px"} h={"340px"} borderRadius={"5px"} />
              <Text fontSize={"26px"} fontWeight={"600"} textAlign={"center"} textColor={"white"} mt={"-60px"}>
                Chair
              </Text>
            </Link>
          </Box>
          <Box bg="white" height="400px">
            <Link>
              <Image src="2.png" w={"225px"} />
              <Text fontSize={"26px"} fontWeight={"600"} textAlign={"center"} textColor={"white"} mt={"-60px"}>
                Bed
              </Text>
            </Link>
          </Box>
          <Box bg="white" height="400px">
            <Link>
              <Image src="3.png" w={"225px"} />
              <Text fontSize={"26px"} fontWeight={"600"} textAlign={"center"} textColor={"white"} mt={"-60px"}>
                Chupboard
              </Text>
            </Link>
          </Box>
          <Box bg="white" height="400px">
            <Link>
              <Image src="4.png" w={"225px"} />
              <Text fontSize={"26px"} fontWeight={"600"} textAlign={"center"} textColor={"white"} mt={"-60px"}>
                Lighting
              </Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex px={"110px"} gap={"110px"} py={"40px"} pl={"130px"} justify={"center"}>
        <Box width={"540px"} height={"auto"}>
          <Text fontSize={"35px"} fontWeight={"600"}>
            The Best Furniture Manufacturer of your choice
          </Text>
          <Text fontSize={"20px"} fontWeight={"400"} mt={"35px"}>
            Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a
            software as services
          </Text>
        </Box>
        <Box>
          <Image src="6.png" w={"430px"} h={"340px"} borderRadius={"5px"} ml={"30px"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Market;
