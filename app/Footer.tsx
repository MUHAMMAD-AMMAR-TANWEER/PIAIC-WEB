"use client"
import React from 'react';
import {Box,Heading,Text,Flex, Stack} from "@chakra-ui/react";


export default function Footer() {
    return (
        <Box bg="blackAlpha.900" >
            <Flex>
            <Box 
                as="img"
                src="https://portal.piaic.org/static/media/LogoPIAIC.fb7de414.svg"
                alt="Company logo"
                h="150px"
                w="150px"
                transform="rotate(360deg)"
                transition="all 0.5s ease-in-out"
                mt="20px"
                ml="200px"
                mb="200px"
            />
            <Box width="300px"></Box>
            <Box w="500px" h="200px" mt="20px">
                <Stack direction="row" spacing="100px">
                    <Stack direction="column" spacing="10px">
                        <Text color="#07ffa5" fontSize='md' fontWeight='800' > Courses</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Web3 And Metaverse</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Artificial Intelligence</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Bioinformincs</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Cloud Native</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Internet of Things</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Networking</Text>
                    </Stack>
                    <Stack direction="column" spacing="10px">
                        <Text color="#07ffa5" fontSize='md' fontWeight='800' > Company</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > About</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Press</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Careers</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Contacts</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Partners</Text>

                    </Stack>

                    <Stack direction="column" spacing="10px">
                        <Text color="#07ffa5" fontSize='md' fontWeight='800' > Support</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Terms of Service</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Legal</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Privacy Policy</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Status</Text>
                        

                    </Stack>

                    <Stack direction="column" spacing="10px">
                        <Text color="#07ffa5" fontSize='md' fontWeight='800' > Follow Us</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Admission</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Panaverse Dao</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' > Twitter</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Github</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Youtube</Text>
                        <Text color="#07ffa5" fontSize='md' fontWeight='600' >Facebook</Text>
                        

                    </Stack>

                </Stack>
            </Box>
            </Flex>
        </Box>
    )
}