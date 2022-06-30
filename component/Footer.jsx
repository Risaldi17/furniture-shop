import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box px={"150px"} bgColor={"blackAlpha.900"}>
      <Flex py="50px" gap={"20px"}>
        <Text fontSize={"30px"} fontWeight={"600"} textColor={"white"}>
          FurniSHop
        </Text>
        <Spacer />
        <Button width={"48px"} height={"48px"} bgColor={"black"} borderRadius={"50px"}>
          <svg width="15" height="15" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 3.60547C4.75 3.60547 3.35547 5.02734 3.35547 6.75C3.35547 8.5 4.75 9.89453 6.5 9.89453C8.22266 9.89453 9.64453 8.5 9.64453 6.75C9.64453 5.02734 8.22266 3.60547 6.5 3.60547ZM6.5 8.80078C5.37891 8.80078 4.44922 7.89844 4.44922 6.75C4.44922 5.62891 5.35156 4.72656 6.5 4.72656C7.62109 4.72656 8.52344 5.62891 8.52344 6.75C8.52344 7.89844 7.62109 8.80078 6.5 8.80078ZM10.4922 3.49609C10.4922 3.08594 10.1641 2.75781 9.75391 2.75781C9.34375 2.75781 9.01562 3.08594 9.01562 3.49609C9.01562 3.90625 9.34375 4.23438 9.75391 4.23438C10.1641 4.23438 10.4922 3.90625 10.4922 3.49609ZM12.5703 4.23438C12.5156 3.25 12.2969 2.375 11.5859 1.66406C10.875 0.953125 10 0.734375 9.01562 0.679688C8.00391 0.625 4.96875 0.625 3.95703 0.679688C2.97266 0.734375 2.125 0.953125 1.38672 1.66406C0.675781 2.375 0.457031 3.25 0.402344 4.23438C0.347656 5.24609 0.347656 8.28125 0.402344 9.29297C0.457031 10.2773 0.675781 11.125 1.38672 11.8633C2.125 12.5742 2.97266 12.793 3.95703 12.8477C4.96875 12.9023 8.00391 12.9023 9.01562 12.8477C10 12.793 10.875 12.5742 11.5859 11.8633C12.2969 11.125 12.5156 10.2773 12.5703 9.29297C12.625 8.28125 12.625 5.24609 12.5703 4.23438ZM11.2578 10.3594C11.0664 10.9062 10.6289 11.3164 10.1094 11.5352C9.28906 11.8633 7.375 11.7812 6.5 11.7812C5.59766 11.7812 3.68359 11.8633 2.89062 11.5352C2.34375 11.3164 1.93359 10.9062 1.71484 10.3594C1.38672 9.56641 1.46875 7.65234 1.46875 6.75C1.46875 5.875 1.38672 3.96094 1.71484 3.14062C1.93359 2.62109 2.34375 2.21094 2.89062 1.99219C3.68359 1.66406 5.59766 1.74609 6.5 1.74609C7.375 1.74609 9.28906 1.66406 10.1094 1.99219C10.6289 2.18359 11.0391 2.62109 11.2578 3.14062C11.5859 3.96094 11.5039 5.875 11.5039 6.75C11.5039 7.65234 11.5859 9.56641 11.2578 10.3594Z"
              fill="white"
            />
          </svg>
        </Button>
        <Button width={"48px"} height={"48px"} bgColor={"black"} borderRadius={"50px"}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.625 1.30859C12.625 1.11719 12.543 0.953125 12.4062 0.816406C12.2695 0.707031 12.1055 0.625 11.9414 0.625H1.05859C0.839844 0.625 0.675781 0.707031 0.566406 0.816406C0.429688 0.953125 0.375 1.11719 0.375 1.30859V12.1914C0.375 12.3828 0.429688 12.5469 0.566406 12.6836C0.675781 12.8203 0.839844 12.875 1.05859 12.875H6.91016V8.11719H5.32422V6.28516H6.91016V4.91797C6.91016 4.15234 7.12891 3.55078 7.56641 3.11328C8.00391 2.70312 8.57812 2.48438 9.28906 2.48438C9.83594 2.48438 10.3281 2.51172 10.7109 2.53906V4.20703H9.72656C9.37109 4.20703 9.125 4.28906 8.98828 4.45312C8.87891 4.58984 8.82422 4.80859 8.82422 5.10938V6.28516H10.6562L10.4102 8.11719H8.82422V12.875H11.9414C12.1328 12.875 12.2969 12.8203 12.4336 12.6836C12.543 12.5469 12.625 12.3828 12.625 12.1914V1.30859Z"
              fill="white"
            />
          </svg>
        </Button>
      </Flex>
      <Divider />
      <Flex gap={"147px"}>
        <Box textColor={"white"} py={"55px"}>
          <Text fontSize={"18px"} fontWeight={"500"}>
            Our Products
          </Text>
          <Text fontSize={"14px"} mt={"20px"}>
            The Support Suite
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            The Sales Suite
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Support
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Guide
          </Text>
        </Box>
        <Box textColor={"white"} py={"55px"}>
          <Text fontSize={"18px"} fontWeight={"500"}>
            Top Features
          </Text>
          <Text fontSize={"14px"} mt={"20px"}>
            Ticketing System
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Knowledge Base
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Community Forums
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Help Desk Software
          </Text>
        </Box>
        <Box textColor={"white"} py={"55px"}>
          <Text fontSize={"18px"} fontWeight={"500"}>
            Resources
          </Text>
          <Text fontSize={"14px"} mt={"20px"}>
            Product Support
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Request Demo
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Library
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Peoplepower Blog
          </Text>
        </Box>
        <Box textColor={"white"} py={"55px"}>
          <Text fontSize={"18px"} fontWeight={"500"}>
            Company
          </Text>
          <Text fontSize={"14px"} mt={"20px"}>
            About Us
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Press
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Investors
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            Events
          </Text>
        </Box>
        <Box textColor={"white"} py={"55px"}>
          <Text fontSize={"18px"} fontWeight={"500"}>
            Favourite Things
          </Text>
          <Text fontSize={"14px"} mt={"20px"}>
            For Enterprise
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            For Startups
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            For Benchmark
          </Text>
          <Text fontSize={"14px"} mt={"10px"}>
            For Small Business
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
