import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDealFun } from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";
import OemModal from "./OemModal";
import logo2 from "../assest/polar.gif";

const initialState = {
  title: "",
  manufacturer: "",
  model: "",
  imageURL: "",
  year: "",
  price: "",
  mileage: "",
  color: "",
  accidents: "",
  prevBuyers: "",
  registrationPlace: "",
};

const AddDeal = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const [dealForm, setDealForm] = useState(initialState);

  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setDealForm((prev) => {
        return { ...dealForm, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setDealForm((prev) => {
        return { ...dealForm, [e.target.name]: e.target.value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addDealFun(dealForm)).then(() => {
      let msg = localStorage.getItem("marketmsg");
      if (msg == "New Data has been added") {
        toast({
          title: "New Data has been added.",
          description: "",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Something Went Wrong.",
          description: "",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <Box style={{ width: "100%", paddingBottom: "10px", paddingTop: "80px" }}>
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "60%",
          margin: "auto",
          padding: "40px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "50px",
          borderRadius: "20px",
          color: "brown",
        }}
      >
        <HStack
          style={{
            paddingTop: "10px",
            margin: "20px",
            marginLeft: "30%",
            gap: "100px",
          }}
        >

<Box width="100%" display="flex">
          <Image src={logo2} borderRadius={10} width="20%" />
         <Heading>Add New Deal</Heading>
         </Box>

          <OemModal />
        </HStack>

        <HStack style={{ width: "100%" }}>
          <br />
          <Box style={{ width: "49%", marginTop: "15px" }}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                type="text"
                value={dealForm.title}
                onChange={handleFormChange}
                placeholder="Enter Title"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Manufacturer</FormLabel>
              <Input
                name="manufacturer"
                type="text"
                value={dealForm.manufacturer}
                onChange={handleFormChange}
                placeholder="Enter Manufacturer Name"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Model No.</FormLabel>
              <Input
                name="model"
                type="text"
                value={dealForm.model}
                onChange={handleFormChange}
                placeholder="Enter Model Number"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                name="year"
                type="number"
                value={dealForm.year}
                onChange={handleFormChange}
                placeholder="Enter Manufacture Year"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                name="imageURL"
                type="url"
                value={dealForm.imageURL}
                onChange={handleFormChange}
                placeholder="Enter Vehicle Image URL"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                name="price"
                type="number"
                value={dealForm.price}
                onChange={handleFormChange}
                placeholder="Enter Listing price"
              />
            </FormControl>
          </Box>
          <Box style={{ width: "49%", marginLeft: "20px" }}>
            <FormControl>
              <FormLabel>Mileage</FormLabel>
              <Input
                name="mileage"
                type="number"
                value={dealForm.mileage}
                onChange={handleFormChange}
                placeholder="Enter Vehicle mileage"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Color</FormLabel>
              <Input
                name="color"
                type="text"
                value={dealForm.color}
                onChange={handleFormChange}
                placeholder="Enter Vehicle color"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Accidents</FormLabel>
              <Input
                name="accidents"
                type="number"
                value={dealForm.accidents}
                onChange={handleFormChange}
                placeholder="Enter Accidents No."
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Previous Buyers</FormLabel>
              <Input
                name="prevBuyers"
                type="number"
                value={dealForm.prevBuyers}
                onChange={handleFormChange}
                placeholder="Enter Previous Buyers No."
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Registration Place</FormLabel>
              <Input
                name="registrationPlace"
                type="text"
                value={dealForm.registrationPlace}
                onChange={handleFormChange}
                placeholder="Enter Registration Place"
              />
            </FormControl>
            <br />
            <Button mt={4} colorScheme="pink" type="submit" w='full'>
              ADD DEAL
            </Button>
          </Box>
        </HStack>
      </form>
      <br />
      <Link to="/getdeal">
        <Button colorScheme="orange" size="md">
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default AddDeal;
