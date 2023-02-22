"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center, Stack } from "@chakra-ui/react";
import Core from "../core";
import Style from "./ai.module.css"
export default function AI() {
    return (
        <Box bg="#080d14">
            <Box bgImage="/assets/Aibackground.png"  h="1000px" w="9xl">
                <Heading color="white" fontFamily="Bebas Neue" fontSize="140px" noOfLines={3}  style={{margin: "0 200px"}}> Artificial Intelligence (AI)
Specialization</Heading>
                <Text color="gray.100" fontSize="50px" className={Style.text_bebas} mt="200px" style={{margin: "50px 200px"}}>
                    A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
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
                        Developing Planet-Scale Intelligent APIs and Python Programming
                    </Heading>
                    </CardHeader>
                    {/** */}
                    <Text> We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.</Text>
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
                        Deep Learning and MLOps
                    </Heading>
                    {/** */}
                    <Text>
                        We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
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