import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editMyDealFun } from "../Redux/marketplaceReducer/action";
import logo3 from "../assest/arrow.png";
const EditDeal = () => {
  const toast = useToast();
  const { editID } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { myData } = useSelector((store) => store.marketplaceReducer);

  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setData((prev) => {
        return { ...data, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setData((prev) => {
        return { ...data, [e.target.name]: e.target.value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    delete data._id;
    delete data.dealerID;
    dispatch(editMyDealFun(editID, data)).then(() => {
      toast({
        title: "Data updated successfully.",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  useEffect(() => {
    let newData = myData.filter((el) => {
      return el._id == editID;
    });
    setData(newData[0]);
  }, []);

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
<Box width="100%" display="flex" >
          <Image src={logo3} borderRadius={10} width="20%" />
          <Heading>Edit Your Deal</Heading>
        </Box>
        

        <HStack style={{ width: "100%" }}>
          <br />
          <Box style={{ width: "49%", marginTop: "15px" }}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                type="text"
                value={data?.title}
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
                value={data?.manufacturer}
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
                value={data?.model}
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
                value={data?.year}
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
                value={data?.imageURL}
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
                value={data?.price}
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
                value={data?.mileage}
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
                value={data?.color}
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
                value={data?.accidents}
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
                value={data?.prevBuyers}
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
                value={data?.registrationPlace}
                onChange={handleFormChange}
                placeholder="Enter Registration Place"
              />
            </FormControl>
            <br />
            <Button mt={4} colorScheme="pink" type="submit"w='full'>
              EDIT DEAL
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

export default EditDeal;
