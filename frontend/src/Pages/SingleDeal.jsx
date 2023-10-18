import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const SingleDeal = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const { marketData } = useSelector((store) => store.marketplaceReducer);

  const color1 = useColorModeValue("brand.light", "brand.dark");
  const color2 = useColorModeValue("gray.900", "white");
  const color3 = useColorModeValue("white", "gray.900");

  useEffect(() => {
    let data = marketData.filter((el) => {
      return el._id == id;
    });
    setData(data[0]);
  }, [id, marketData]);

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 24 }}


      >
        <Flex>
          <Image
            rounded={"md"}
            borderRadius="200px"
            alt={"product image"}
            src={data?.imageURL}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "450px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} bg="pink.500" borderRadius="30px" p="30px">
          <Box as={"header"}>
          <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              color={color1}
            >
              {data?.manufacturer}
            </Heading>

            <Text
              color={color2}
              fontWeight={600}
              fontSize={"3xl"}
              textAlign="center"
            >
              {data?.title}
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"3xl"}
              textAlign="center"
            >
              Model : {data?.model}
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              Year : {data?.year}
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              Mileage : {data?.mileage} Km/L
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
              textTransform={"capitalize"}
            >
              Color : {data?.color}
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              Price : ₹ {data?.price} /-
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              Previous Buys : {data?.prevBuyers}
            </Text>
            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              No. of Accidents : {data?.accidents}
            </Text>

            <Text
              color={color2}
              fontWeight={600}
              fontSize={"2xl"}
              textAlign="center"
            >
              Registration Place : {data?.registrationPlace}
            </Text>
          </Box>
          <Center>
            <Button
              w={"full"}
              mt={8}
              width="350px"
              size={"lg"}
              py={"7"}
              bg={color2}
              color={color3}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => alert("This Functionality Not Added Yet")}
            >
              &nbsp; BUY NOW
            </Button>
          </Center>
          <Center>
            <NavLink to={`/`}>
              <Button
                size={"md"}
                width="150px"
                py={"7"}
                bg={color2}
                color={color3}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Go Back
              </Button>
            </NavLink>
          </Center>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleDeal;
