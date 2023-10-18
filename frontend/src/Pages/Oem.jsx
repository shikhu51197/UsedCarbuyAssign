import React, { useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOemFun } from "../Redux/oemReducer/action";

const Oem = () => {
  const dispatch = useDispatch();
  const { oemData, isLoading, isError } = useSelector(
    (store) => store.oemReducer
  );

  useEffect(() => {
    dispatch(getOemFun());
  }, []);

  return (
    <>
      <Box paddingTop="120px" margin="20px" padding='100px' gap="400px">
        <Heading align='left'>OEM Details</Heading>
        <ChakraLink as={Link} to="/getdeal">
        <Box width="100%" align='right'>
          <Button  colorScheme="orange" size="md">
            Go Back
          </Button></Box>
        </ChakraLink>

      </Box>

      {isLoading === true ? (
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          margin="auto"
          paddingTop="90px"
          marginBottom="360px"
        />
      ) : isError === true ? (
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          margin="auto"
          width="45%"
        />
      ) : (
        <Table variant="striped" colorScheme="teal" width="90%" margin="auto" marginTop="30px" paddingBottom="50px">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Image</Th>
              <Th>Model</Th>
              <Th>Manufacturer</Th>
              <Th>Year</Th>
              <Th>Mileage (Km/L)</Th>
              <Th>Price (₹)</Th>
              <Th>Power (Kw)</Th>
              <Th>Max Speed (KM/h)</Th>
              <Th>Available Colors</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {oemData &&
              oemData?.map((el) => (
                <Tr key={el._id}>
                  <Td>{el.title}</Td>
                  <Td>
                    <Image
                      src={el.imageURL}
                      alt={el.title}
                      width="1000px" // Adjust the width as needed
                      height="100px" // Auto adjust height to maintain aspect ratio
                      borderRadius="5px"
                    />
                  </Td>
                  <Td>{el.model}</Td>
                  <Td>{el.manufacturer}</Td>
                  <Td>{el.year}</Td>
                  <Td>{el.mileage}</Td>
                  <Td>{el.originalPrice}</Td>
                  <Td>{el.power}</Td>
                  <Td>{el.maxSpeed}</Td>
                  <Td>
                    <ul
                      style={{
                        listStyleType: "none",
                        display: "flex",
                        gap: "30px",
                      }}
                    >
                      {el.availableColors?.map((color, i) => (
                        <li
                          key={i}
                          style={{
                            backgroundColor: color,
                            border: "2px dotted teal",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        >
                          &nbsp;
                        </li>
                      ))}
                    </ul>
                  </Td>
                  <Td>{el.description}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default Oem;
