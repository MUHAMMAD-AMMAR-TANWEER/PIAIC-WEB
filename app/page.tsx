'use client'
// import Image from 'next/image'
import { Inter } from '@next/font/google'

import { Box, Heading, Text, Image, extendTheme, Flex } from '@chakra-ui/react'
import Style from './page.module.css'
import { Card, Grid, Link } from '@nextui-org/react'
import { Card1 } from './Card1'
import { Card2 } from './Card2'
import { Card3 } from './Card3'
import { Card4 } from './Card4'
import { Card5 } from './Card5'
import { Card6 } from './Card6'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, gray.600,#393a3d ,#000000)"
        textAlign="center"
      >
        {/* <Flex direction="row">
          <Box w="6xl" h="sm">
            <Image
              boxSize="580px"
              align="left"
              src="/assets/Ammar0000_cyberpunk_high_quality_aesthetic_handsome__neon_green_8f3908c3-175b-403e-b359-02dd9a02d0c1.png"
              alt="President"
            />
          </Box>
          <Box w="9xl" px="10" textAlign={['left', 'left', 'left']} mt="15px">
            <Heading
              className={Style.text_bebas}
              fontWeight="extrabold"
              fontSize="9xl"
              as="h1"
              color="#07ffa5"
              fontFamily="Bebas Neue"
            >
              Presidential Initiative
            </Heading>
            <Text
              fontSize="6xl"
              fontWeight="500"
              mt="8px"
              color="white"
              fontFamily="Bebas Neue"
            >
              for Artificial Intelligence & Computing
            </Text>
            <Text
              fontSize="xl"
              fontWeight="500"
              mt="4px"
              color="white"
              noOfLines={7}
            >
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution.
            </Text>
            <Text
              fontSize="xl"
              fontWeight="500"
              mt="4px"
              color="white"
              noOfLines={7}
            >
              We want Pakistan to become a global hub for AI, data science,
              cloud native computing, edge computing, blockchain, augmented
              reality, and internet of things.
            </Text>
          </Box>
        </Flex> */}
        {/** Image of President*/}
        <Box
          as="section"
          h="2000px"
          w="9xl"
          bgImage="/assets/NeonDreams_Inside_of_a_3D_city_built_out_of_code_matrix_colors__afba574a-6e33-4c39-a978-ca8f2d5e834c.jpg"
          textAlign="center"
        >
          {/* <Heading
            color="white"
            fontFamily="Bebas Neue"
            fontSize="150px"
            noOfLines={3}
            style={{ margin: '0 80px' }}
          >
            Getting Ready for the Next Generation of the Internet
          </Heading> */}
          <Text
            color="gray.100"
            fontSize="50px"
            fontFamily="Bebas Neue"
            mt="200px"
            style={{ margin: '150px 200px' }}
          >
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more. In this brand-new type of curriculum, students
            will learn how to make money and boost exports in the classroom and
            will begin doing so within six months of the program's beginning. It
            resembles a cross between a corporate venture and an educational
            project.
          </Text>
        </Box>
      </Box>
      <Box bg="black">
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card1 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card2 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card3 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card4 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card5 />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card6 />
          </Grid>
        </Grid.Container>
      </Box>
    </Box>
  )
}
