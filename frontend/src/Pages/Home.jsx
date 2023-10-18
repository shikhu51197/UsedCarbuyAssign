import {
  Box,
  Button,
  Center,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getColorDealFun,
  getDealFun,
  getMileageDealFun,
  getPriceDealFun,
  getSearchDealFun,
} from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { marketData, isLoading, isError } = useSelector(
    (store) => store.marketplaceReducer
  );

  const handleReset = () => {
    dispatch(getDealFun());
  };

  const handleSortByPrice = (value) => {
    dispatch(getPriceDealFun(value));
  };

  const handleSortByMileage = (value) => {
    dispatch(getMileageDealFun(value));
  };

  const handleFilterByColor = (value) => {
    dispatch(getColorDealFun(value));
  };

  const handleSearch = (value) => {
    dispatch(getSearchDealFun(value));
  };

  useEffect(() => {
    dispatch(getDealFun());
  }, []);

  return (
  <><Heading mt="120px">HomePage</Heading>
    <Box style={{ width: "100%" }}>
    
    <Box
      paddingTop={"50px"}
      paddingBottom={"30px"}
      paddingLeft={"80px"}
      paddingRight={"80px"}
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="20px"
      borderRadius="100px"
      // bg="blue.100"
      align="center"
    >
      <Box>
        <FormLabel>Sort by Price:</FormLabel>
        <Select onChange={(e) => handleSortByPrice(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Sort by Mileage:</FormLabel>
        <Select onChange={(e) => handleSortByMileage(e.target.value)}>
          <option value="">Sort by Mileage</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Filter by Color:</FormLabel>
        <Select onChange={(e) => handleFilterByColor(e.target.value)}>
          <option value="">Filter by Color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="silver">Silver</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </Select>
      </Box>

      <Box>
        <FormLabel>Search Car:</FormLabel>
        <Input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Car🚗"
        />
      </Box>
    </Box>
      <Button marginBottom={"30px"} colorScheme ='facebook' >
        Reset All Filters📝
      </Button>

      {isLoading === true ? (
        <>
          <Image
            src="https://cdn140.picsart.com/301568770156201.gif?to=min&r=640"
            alt="loading"
            margin="auto"
            paddingTop="90px"
            marginBottom="360px"
          />
        </>
      ) : isError === true ? (
        <>
          <Image
            src="https://cdn.dribbble.com/users/1070140/screenshots/3401059/wrong.gif"
            alt="error"
            margin="auto"
            width="45%"
          />
        </>
      ) : (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            width: "90%",
            margin: "auto",
            paddingBottom: "50px",
          }}
        >
          {marketData &&
            marketData.map((el) => {
              return (
                <Box
                  key={el._id}
                  style={{
                    textAlign: "left",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    paddingBottom: "10px",
                  }}
                >
                  <Image
                    src={el.imageURL}
                    alt={el.title}
                    width={"100%"}
                    height={"250px"}
                    borderTopLeftRadius="10px"
                    borderTopRightRadius="10px"
                    marginBottom={"10px"}
                  />
                  <Text marginLeft={"20px"} style={{ fontWeight: "bold" }}>
                    Title : {el.title}
                  </Text>
                  <Text marginLeft={"20px"}>Model : {el.model}</Text>
                  <Text marginLeft={"20px"}>
                    Manufacturer : {el.manufacturer}
                  </Text>
                  <Text marginLeft={"20px"}>Year : {el.year}</Text>
                  <Text marginLeft={"20px"}>Mileage : {el.mileage} Km/L</Text>
                  <Text marginLeft={"20px"}>Price : ₹ {el.price} /-</Text>
                  <Button colorScheme='yellow' w='50%' marginLeft={"150px"} marginTop={"10px"}>
                    {" "}
                    <Link to={`/deal/${el?._id}`}>Load More⬇️</Link>
                  </Button>
                </Box>
              );
            })}
        </Box>
      )}

      {marketData.length === 0 && (
        <Center>
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png"
            alt="result_not_found"
            width="45%"
          />
        </Center>
      )}
    </Box></>
  );
};

export default Home;
