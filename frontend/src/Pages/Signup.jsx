import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupFun } from "../Redux/authReducer/action";
import { Link } from "react-router-dom";
import logo from "../assest/face.gif";

const Signup = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    setForm((prev) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(SignupFun(form)).then(() => {
      const message = localStorage.getItem("signupMsg");

      if (message == "New dealer has been registered") {
        toast({
          title: "Signup Success!",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error creating account",
          description: "Something Went Wrong.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }

      localStorage.removeItem("signupMsg");
    });
  };
  return (

    <Box  width="100%" mt="30px"  mb="100px">
    
      <form
        onSubmit={handleFormSubmission}
        style={{
          width: "30%",
          margin: "auto",
          padding: "40px",
          
          // border: "1px solid red",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "100px",
          borderRadius: "20px",
        }}
      >
       <Box margin="auto" width="30%">
          <Image src={logo} borderRadius={10} width="100%" />
        </Box>
        <Heading>Signup Form</Heading>
        <br />
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            value={form.name}
            onChange={handleSignup}
            placeholder="Your Name"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleSignup}
            placeholder="Your Email"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            alue={form.password}
            onChange={handleSignup}
            placeholder="Your Password"
          />
        </FormControl>
        <br />
        <Button mt={4} colorScheme="pink" type="submit" width='full'>
          Signup
        </Button>
        <Stack pt={6}>
          <Text align={"center"}>
            Already a user? <Button variant={"link"} color={"blue.400"}><Link  to="/signin" >Signin</Link></Button>
          </Text>
        </Stack>
      </form>
    </Box>
    
  );
};

export default Signup;
