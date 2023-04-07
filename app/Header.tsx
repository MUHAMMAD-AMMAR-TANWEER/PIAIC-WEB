'use client'
import React from 'react'
import {
  Box,
  useColorMode,
  Image,
  Flex,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react'

// import { Navbar, Button, Link, Text,useTheme } from "@nextui-org/react";

// export default function Header(){
//   return (

//       <Navbar isBordered variant="floating" style={{color:"black"}}>
//         <Navbar.Brand>

//           <Text b color="inherit" hideIn="xs">
//             ACME
//           </Text>
//         </Navbar.Brand>
//         <Navbar.Content hideIn="xs" variant="highlight-rounded">
//           <Navbar.Link href="#">Features</Navbar.Link>
//           <Navbar.Link  href="#">Customers</Navbar.Link>
//           <Navbar.Link href="#">Pricing</Navbar.Link>
//           <Navbar.Link href="#">Company</Navbar.Link>
//         </Navbar.Content>
//         <Navbar.Content>
//           <Navbar.Link color="inherit" href="#">
//             Login
//           </Navbar.Link>
//           <Navbar.Item>
//             <Button auto flat as={Link} href="#">
//               Apply
//             </Button>
//           </Navbar.Item>
//         </Navbar.Content>
//       </Navbar>

//   )
// }

export default function Header() {
  // const { colorMode } = useColorMode();
  // const bgColor = { light: 'gray.200', dark: 'gray.500' };
  return (
    <Box>
      <Box
        bg="blackAlpha.900"
        p={5}
        position="sticky"
        top={0}
        zIndex={1}
        width="100%"
      >
        <Flex>
          <Box
            as="img"
            src="https://portal.piaic.org/static/media/LogoPIAIC.fb7de414.svg"
            alt="Company logo"
            height="80px"
            width="80px"
            transform="rotate(360deg)"
            transition="all 0.5s ease-in-out"
          />
          <Box w="600px"></Box>
          <Box flex="2">
            <HStack spacing="36px" mt="6">
              <Button
                fontSize="md"
                fontWeight="600"
                colorScheme="black"
                color="#07ffa5"
                variant="outline"
                style={{ borderRadius: '999px', padding: '15px 15px' }}
              >
                How It Works
              </Button>
              <Button
                fontSize="md"
                fontWeight="600"
                colorScheme="black"
                color="#07ffa5"
                variant="outline"
                style={{ borderRadius: '999px', padding: '15px 15px' }}
              >
                About
              </Button>
              <Button
                fontSize="md"
                fontWeight="600"
                colorScheme="black"
                color="#07ffa5"
                variant="outline"
                style={{ borderRadius: '999px', padding: '15px 15px' }}
              >
                Available Programs
              </Button>
              <Button
                fontSize="md"
                fontWeight="600"
                colorScheme="black"
                color="#07ffa5"
                variant="outline"
                style={{ borderRadius: '999px', padding: '15px 15px' }}
              >
                Panaverse DAO
              </Button>

              <Button
                fontSize="md"
                fontWeight="600"
                colorScheme="black"
                color="#07ffa5"
                variant="outline"
                style={{ borderRadius: '999px', padding: '15px 15px' }}
              >
                APPLY
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

// import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";

// const Header = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Flex
//       as="header"
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       zIndex={1}
//       transition="all 0.2s"
//       bg={colorMode === "light" ? "gray.800" : "gray.50"}
//       height="50px"
//       justifyContent="space-between"
//       alignItems="center"
//       padding="0.5rem"
//     >
//       <Box>Your Logo</Box>
//       <Button
//         onClick={toggleColorMode}
//         bg={colorMode === "light" ? "green.500" : "green.200"}
//         _hover={{ bg: "green.600" }}
//       >
//         Toggle Color Mode
//       </Button>
//     </Flex>
//   );
// };

// export default Header;
