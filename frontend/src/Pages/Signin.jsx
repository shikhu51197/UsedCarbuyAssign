import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,Image
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SigninFun } from "../Redux/authReducer/action";
import { Link, Navigate } from "react-router-dom";
import logo1 from "../assest/florid.gif";
const Signin = () => {
  const toast = useToast();
  const { isAuth } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
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
    dispatch(SigninFun(form)).then((res) => {
      const dealerName = localStorage.getItem("dealerName");
      const message = localStorage.getItem("signinMsg");
      if (message == "Login Succesfull") {
        toast({
          title: "Login Succesfull.",
          description: `Welcome, ${dealerName}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error while login",
          description: "Something Went Wrong.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }

      localStorage.removeItem("signinMsg");
    });
  };

  if (isAuth) {
    return <Navigate to="/getdeal" />;
  }
  return (
    <>
    <Box display="flex" width="100%" mt={30}>
     
    <Box width="30%">
          <Image src={logo1} borderRadius={10} width="100%" />
        </Box>
    <Box width= "70%" >
      <form
        onSubmit={handleFormSubmission}
        style={{
          width: "50%",
          margin: "auto",
          padding: "40px",
          // border: "1px solid red",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "100px",
          borderRadius: "20px",
        }}
      >
        <Heading>Signin Form</Heading>
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
        <Button mt={4} colorScheme="pink" type="submit" w="full">
          Signin
        </Button>
        <Stack pt={6}>
          <Text align={"center"}>
            Not Registered?{" "}
            <Button variant={"link"} color={"blue.400"}>
              <Link to="/signup">Signup</Link>
            </Button>
          </Text>
        </Stack>
      </form>
    </Box>
    </Box>
    </>
  );
};

export default Signin;
