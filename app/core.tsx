"use client";
import {Box, Heading, Text, Card, CardHeader, CardBody, CardFooter, Center ,Stack} from "@chakra-ui/react";
export default function Core(){
    return (
        <>
        <Box>
        <Stack direction="column" spacing="50px" mt="50px">
        <Box>
        <Center>
        <Card bg="#07ffa5" w="1000px">
        <Box as="section" >
            <CardHeader textAlign="center" >
            <Heading>Quater I (Core)</Heading>
            <Heading>Object-Oriented Programming using TypeScript</Heading>
            {/* Icon  */}
            </CardHeader>
            <Text>
                We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. 
            </Text>
            <Text>Duration: 13 Weeks</Text>
        </Box>
        </Card>
        </Center>
        </Box>

        <Box>
        <Center>
        <Card bg="#07ffa5" w="1000px">
        <Box as="section">
            <CardHeader textAlign="center" >
            <Heading>Quater II (Core)</Heading>
            <Heading>Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
            {/* Icon  */}
            </CardHeader>
            <Text>
                The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
            </Text>
            <Text>Duration: 13 Weeks</Text>
        </Box>
        </Card>
        </Center>
        </Box>
        <Box>
        <Center>
        <Card bg="#07ffa5" w="1000px">
        <Box as="section">
            <CardHeader textAlign="center" >
            <Heading>Quater III (Core)</Heading>
            <Heading>Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
            {/* Icon  */}
            </CardHeader>
            <Text>
                You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
            </Text>
            <Text>Duration: 13 Weeks</Text>
        </Box>
        </Card>
        </Center>
        </Box>
        </Stack>
        </Box>
        
        </>
    )
    
}