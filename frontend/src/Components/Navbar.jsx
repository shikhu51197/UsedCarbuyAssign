import {
  Avatar,Image,
  Box,
  Button,
  Flex,
  Heading,
  Tooltip,Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assest/car.png";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignoutFun } from "../Redux/authReducer/action";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaIconName } from 'react-icons/fa';

const Navbar = () => {
  const { isAuth } = useSelector ((store) => store.authReducer);
  const { colorMode, toggleColorMode } = useColorMode();

  const dealerName = localStorage.getItem("dealerName");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(SignoutFun());
  };
  return (
    <Flex
    as='nav'
      justifyContent={"space-between"}
      width={"100%"}
      py={4}
      px={4}
      boxShadow="xl"
      // position="fixed"
      bg="white.500"
      top={"0"}
      zIndex="1000"
    >
     
      <Box display="flex" ml={"15px"}>
      <Link to="/">
          <Image
            src={logo}
            alt="My Logo"
        
            borderRadius={50}
            ml={"5px"}
            height='50px'
            
          /></Link>
          <Heading ml={"5px"} color="yellow.500">
            {" "}
            UsedCars
          </Heading>
      
          <Heading ml={"20px"}>/</Heading>

          <Box>
            <Text ml={"20px"}>
              Lets Buy your<br></br>Second Hand Cars{" "}
            </Text>
          </Box>
        </Box>
      <Flex justifyContent={"space-around"} width={"50%"} spacing={10} mt='10px'>
        <Link to="/getdeal">
          <Button colorScheme="pink" size="md">
            Dealers Page
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="pink" size="md">
            Sign Up
          </Button>
        </Link>
        {!isAuth && (
          <Link to="/signin">
            <Button colorScheme="pink" size="md">
              Sign In
            </Button>
          </Link>
        )}

        {isAuth && (
          <Link to="/" onClick={handleLogout}>
            <Button colorScheme="blue" size="md">
              Sign Out
            </Button>
          </Link>
        )}

        {isAuth && (
          <Tooltip hasArrow label={dealerName} bg="gray.300" color="black">
            <Avatar name={dealerName} />
          </Tooltip>
        )}
      </Flex>
      <Button onClick={toggleColorMode} size="lg" mr={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    </Flex>
  );
};

export default Navbar;
