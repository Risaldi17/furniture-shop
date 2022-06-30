import { Box, Button, Flex, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bgImage={"home.png"} bgRepeat={"no-repeat"} bgSize={"cover"} bgPosition={"center"} paddingBottom={"200px"} px={"100px"}>
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Heading textColor={"white"} fontFamily={"saira"} fontSize={"36px"} pt={"28px"}>
          FurniShop
        </Heading>
        <Stack direction={"row"} spacing={"30px"}>
          <Link>
            <Text textAlign={"end"} color={"white"} fontSize={"16px"} fontFamily={"saira"} pt={"45px"}>
              Home
            </Text>
          </Link>
          <Link>
            <Text color={"white"} fontSize={"16px"} fontFamily={"saira"} pt={"45px"}>
              About
            </Text>
          </Link>
          <Link>
            <Text color={"white"} fontSize={"16px"} fontFamily={"saira"} pt={"45px"}>
              Feature
            </Text>
          </Link>
          <Link>
            <Text color={"white"} fontSize={"16px"} fontFamily={"saira"} pt={"45px"}>
              Contact
            </Text>
          </Link>
        </Stack>
      </Flex>
      <Flex direction={"column"} textAlign={"center"}>
        <Text fontWeight={"600"} fontSize={"60px"} pt={"160px"} px={"280px"} color={"white"}>
          Creative Home Simpify your Furniture
        </Text>
        <Text fontSize={"20px"} fontWeight={"400"} color={"white"} px={"360px"} pt={"25px"}>
          Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto
        </Text>
      </Flex>
      <Flex direction={"row"} justifyContent={"center"}>
        <Button px={"80px"} py={"16px"} backdropBlur={"40%"} w={"250px"} h={"50px"} mt={"60px"} borderRadius={"10px"} variant={"outline"} textColor={"white"}>
          Shop Now
        </Button>
      </Flex>
      <Flex direction={"row"} justifyContent="center">
        <Box w={"1240px"} h={"180px"} mt={"194px"} mb={"-285px"} bgColor={"#286F6C"} borderRadius={"20px"}>
          <SimpleGrid columns={4} spacing="20px" mt={"35px"} ml={"125px"}>
            <Box height="80px" textAlign={"center"} w={"200px"} h={"105px"} paddingRight={"100px"} borderRight={"1px"} borderColor={"white"}>
              <Text fontSize={"40px"} fontWeight={"600"} textColor={"white"}>
                7
              </Text>
              <Text textColor={"white"}>Year Experience</Text>
            </Box>
            <Box height="80px" textAlign={"center"} w={"200px"} h={"105px"} paddingRight={"100px"} borderRight={"1px"} borderColor={"white"}>
              <Text fontSize={"40px"} fontWeight={"600"} textColor={"white"}>
                2
              </Text>
              <Text textColor={"white"}>Opened in the country</Text>
            </Box>
            <Box height="80px" textAlign={"center"} w={"200px"} h={"105px"} paddingRight={"100px"} borderRight={"1px"} borderColor={"white"}>
              <Text fontSize={"40px"} fontWeight={"600"} textColor={"white"}>
                10k+
              </Text>
              <Text textColor={"white"}>Furniture Sold</Text>
            </Box>
            <Box height="80px" textAlign={"center"} w={"112px"} h={"105px"}>
              <Text fontSize={"40px"} fontWeight={"600"} textColor={"white"}>
                260
              </Text>
              <Text textColor={"white"}>Variant Furniture</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
