"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center, Stack } from "@chakra-ui/react";
import Core from "../core";
import Style from "./npas.module.css"
export default function NPAS() {
    return (
        <Box bg="#080d14">
            <Box bgImage="/assets/npasbackground.jpg"  h="1000px" w="9xl">
                <Heading color="white" fontFamily="Bebas Neue" fontSize="140px" noOfLines={3}  style={{margin: "0 200px"}}> Programmability and Automation
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
                        CCNA 200-301 Certification
                    </Heading>
                    </CardHeader>
                    {/** */}
                    <Text> This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.</Text>
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
                        Network Programmability and Automation
                    </Heading>
                    {/** */}
                    <Text>
                        Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in developing the skills required for the Next-Generation Network Engineer.
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