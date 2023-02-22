"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center, Stack } from "@chakra-ui/react";
import Core from "../core";
import Style from "./meta.module.css"
export default function META() {
    return (
        <Box bg="#080d14">
            <Box bgImage="/assets/metaversebackground.png"  h="1000px" w="9xl">
                <Heading color="white" fontFamily="Bebas Neue" fontSize="140px" noOfLines={3}  style={{margin: "0 200px"}}> Web3.0 and Metaverse
Specialization</Heading>
                <Text color="gray.100" fontSize="50px" className={Style.text_bebas} mt="200px" style={{margin: "50px 200px"}}>
                    A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF METAVERSE.
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
                        Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                    </Heading>
                    </CardHeader>
                    {/** */}
                    <Text> In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</Text>
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
                        Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                    </Heading>
                    {/** */}
                    <Text>
                        The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
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