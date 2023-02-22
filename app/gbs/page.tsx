"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center, Stack } from "@chakra-ui/react";
import Core from "../core";
import Style from "./gbs.module.css"
export default function GBS() {
    return (
        <Box bg="#080d14">
            <Box bgImage="/assets/biobackground.png"  h="1000px" w="9xl">
                <Heading color="white" fontFamily="Bebas Neue" fontSize="140px" noOfLines={3}  style={{margin: "0 200px"}}> Genomics and Bioinformatics
Specialization</Heading>
                <Text color="gray.100" fontSize="50px" className={Style.text_bebas} mt="200px" style={{margin: "50px 200px"}}>
                    A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF BIOINFORMATICS.
                </Text>
            </Box>
            <Box >
            <Heading color="white" fontSize="100px" className={Style.text_bebas} textAlign="center" textShadow='2px 2px #07ffa5'>PROGRAM STRUCTURE</Heading>
            
            <Box as="section" textAlign="center">
                <Core/>
                <Stack direction="column" spacing="50px" mt="50px" >
                <Box>
                <Center>
                <Card bg="#07ffa5" w="1000px">
                <Box as="section" boxShadow='xs' p='6' rounded='md'>
                    <CardHeader textAlign="center" >
                    <Heading >Quarter IV(Specialization)</Heading>
                    <Heading>
                        Python for Biologists
                    </Heading>
                    </CardHeader>
                    {/** */}
                    <Text> This course will focus on learning the basics of the Python programming language through genomics examples.</Text>
                    <Text>
                        Duration: 13 Weeks
                    </Text>
                </Box>
                </Card>
                </Center>
                </Box>
                <Box>
                <Center>
                <Card bg="#07ffa5" w="1000px">
                <Box as="section" boxShadow='dark-lg' p='6' rounded='xl'>
                    <Heading>Quarter V(Specialization)</Heading>
                    <Heading>
                        Bioinformatics with Python
                    </Heading>
                    {/** */}
                    <Text>
                        In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.
                    </Text>
                    <Text>Duration: 13 Weeks</Text>
                </Box>
                </Card>
                </Center>
                </Box>
                </Stack>
                <Box h="50px"></Box>
                
            </Box>
            </Box>
        </Box>
    )
}