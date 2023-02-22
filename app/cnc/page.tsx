"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center, Stack } from "@chakra-ui/react";
import Core from "../core";
import Style from "./cnc.module.css"
export default function CNC() {
    return (
        <Box bg="#080d14">
            <Box bgImage="/assets/computingbackground.png"  h="1000px" w="9xl">
                <Heading color="white" fontFamily="Bebas Neue" fontSize="140px" noOfLines={3}  style={{margin: "0 200px"}}> Cloud-Native Computing
Specialization</Heading>
                <Text color="gray.100" fontSize="50px" className={Style.text_bebas} mt="200px" style={{margin: "50px 200px"}}>
                    A ONE AND A QUARTER YEAR CLOUD COMPUTING PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
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
                        Certified Kubernetes Application Developer (CKAD)
                    </Heading>
                    </CardHeader>
                    {/** */}
                    <Text> Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.</Text>
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
                        Developing Multi-Cloud Apps using CDK for Terraform
                    </Heading>
                    {/** */}
                    <Text>
                        Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.
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