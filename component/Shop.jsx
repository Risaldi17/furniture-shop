import { Box, Button, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react";

const Shop = () => {
  return (
    <Box bgImage={"bgshop.png"} bgPosition={"center"} bgRepeat={"no-repeat"} paddingBottom={"180px"} bgSize={"cover"}>
      <Box pt={"100px"} pl={"750px"} pr={"122px"}>
        <Text fontSize={"40px"} fontWeight={"600"} w={"349px"} textColor={"white"}>
          Get more discount Off your order
        </Text>
        <Text fontSize={"20px"} fontWeight={"400"} textColor={"white"} mt={"20px"}>
          Join our mailing list
        </Text>
        <HStack mt={"40px"}>
          <FormControl textColor="white">
            <Input id="email" type="email" bgColor="white" placeholder="Your Email Addres" />
          </FormControl>
          <Button colorScheme={"blackAlpha"} variant="solid">
            <Text py={"20px"} px={"29px"}>
              Shop Now
            </Text>
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Shop;
