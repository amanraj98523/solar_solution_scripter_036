import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Footer from "./Footer";
import { GetStartedPage } from "./Feature/GetStartedPage";
import { Features } from "./Feature/FeatureMain";
import { Review } from "./Feature/Review";
// import { Accordion } from './Accordian';
// import CardCarousel from './Caraousal';

const Home = () => {
  return (
    <>
      {/* <Box p={4}>
    <Box mt={"70px"}
      w={{ base: '100%', md: '1400px' }}
      mx="auto"
      borderRadius="24px"
      textAlign="center"
      backgroundImage="url('https://cdn.sanity.io/images/tlr8oxjg/production/86a0799384de64d2f1d1717a97018b6368029d45-1456x816.png?w=3840&q=80&fit=clip&auto=format')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      height={{ base: '60vh', md: '40vh' }}
      p={4}
    >
      <Box color="white">
        <Heading fontSize={{ base: '2xl', md: '4xl' }}>
          The easiest way to make your meetings interactive
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} mt={4}>
          Engage your participants with live polls, Q&A, quizzes and word clouds
          — whether you meet in the office, online or in-between.
        </Text>
        <Button mt={4} bg="teal.500">
          Get Started
        </Button>
      </Box>
    </Box>
  </Box> */}

      {/* <Accordion ></Accordion> */}
      {/* <Box p={4} mt="0px" ml="-270px">
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {features.map((feature, index) => (
            <GridItem
              key={index}
              p={4}
              borderRadius="lg"
              boxShadow="md"
              bg="white"
              backgroundColor="#faf7f0"
              _hover={{ boxShadow: 'xl', transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out' }}
            >
              <Link as={RouterLink} to={feature.link}>
                <Image src={feature.image} alt={feature.title} borderRadius="md" />
                <Text fontSize="lg" fontWeight="bold" mt={4}>
                  {feature.title}
                </Text>
                <Text mt={2} fontSize="sm" color="gray.600">
                  {feature.description}
                </Text>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box> */}

      {/* <CardCarousel></CardCarousel> */}
      <GetStartedPage/>
      <Features/>
      <Review/>
      <Footer/>
    </>
  );
};



export default Home;