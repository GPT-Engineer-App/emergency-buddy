import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image, List, ListItem, ListIcon, Icon, Link } from "@chakra-ui/react";
import { FaPhoneAlt, FaHeart, FaAmbulance, FaRegLifeRing, FaRegHospital } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          911 - A Lifeline for Millions
        </Heading>
        <Text fontSize="lg">Celebrating the countless lives saved by the quick response of 911 emergency services.</Text>
      </Box>

      <Box py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box textAlign="center">
            <Icon as={FaPhoneAlt} w={16} h={16} color="blue.500" mb={4} />
            <Heading as="h3" size="lg">
              Immediate Assistance
            </Heading>
            <Text mt={4}>911 provides immediate access to critical emergency services, ensuring timely assistance during crises.</Text>
          </Box>

          <Box textAlign="center">
            <Icon as={FaHeart} w={16} h={16} color="red.500" mb={4} />
            <Heading as="h3" size="lg">
              Saving Lives
            </Heading>
            <Text mt={4}>The swift action of 911 operators and responders has been instrumental in saving numerous lives.</Text>
          </Box>

          <Box textAlign="center">
            <Icon as={FaAmbulance} w={16} h={16} color="orange.500" mb={4} />
            <Heading as="h3" size="lg">
              Emergency Medical Services
            </Heading>
            <Text mt={4}>In medical emergencies, the 911 service dispatches ambulances to provide immediate care and transport to hospitals.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          How 911 Has Made a Difference
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaRegLifeRing} color="green.500" />
            Coordinated rapid response for accident and disaster victims
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegHospital} color="green.500" />
            Helped decrease the time to receive medical treatment significantly
          </ListItem>
          {/* Add more list items here */}
        </List>
      </Box>

      <Box textAlign="center" py={10}>
        <Image src="https://images.unsplash.com/photo-1519540393135-f52583f80e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBjYWxsJTIwY2VudGVyfGVufDB8fHx8MTcxMDI4ODk2Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Emergency Call Center" boxSize="sm" objectFit="cover" mx="auto" />
      </Box>

      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Learn More
        </Heading>
        <Text fontSize="lg">
          To understand the full impact of 911, visit the official{" "}
          <Link color="blue.500" href="https://www.nena.org/" isExternal>
            National Emergency Number Association (NENA)
          </Link>{" "}
          website.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
