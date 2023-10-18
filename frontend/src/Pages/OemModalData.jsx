import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOemFun } from "../Redux/oemReducer/action";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const OemModalData = () => {
  const dispatch = useDispatch();
  const { oemData, isLoading, isError } = useSelector(
    (store) => store.oemReducer
  );

  useEffect(() => {
    dispatch(getOemFun());
  }, []);

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "30px",
        width: "90%",
        margin: "auto",
        marginTop: "30px",
        paddingBottom: "50px",
      }}
    >
      {" "}
      {oemData &&
        oemData?.map((el) => {
          return (
            <Box
              key={el._id}
              style={{
                textAlign: "left",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "20px",
                overflow: "hidden",
              }}
            >
              <HStack>
                {" "}
                <Image
                  src={el.imageURL}
                  alt={el.title}
                  width={"35%"}
                  height={"100%"}
                  borderRadius="10px"
                  marginBottom={"10px"}
                />
                <Box>
                  <Text marginLeft={"20px"} style={{ fontWeight: "bold" }}>
                    Title : {el.title}
                  </Text>
                  <Text marginLeft={"20px"}>Model : {el.model}</Text>
                  <Text marginLeft={"20px"}>
                    Manufacturer : {el.manufacturer}
                  </Text>
                  <Text marginLeft={"20px"}>Year : {el.year}</Text>
                  <Text marginLeft={"20px"}>Mileage : {el.mileage} Km/L</Text>
                  <Text marginLeft={"20px"}>
                    Price : ₹ {el.originalPrice} /-
                  </Text>
                  <Text marginLeft={"20px"}>Power : {el.power} Kw</Text>
                  <Text marginLeft={"20px"}>
                    Max Speed : {el.maxSpeed} KM/h
                  </Text>
                  <Text marginLeft={"20px"}>
                    {" "}
                    <ul
                      style={{
                        listStyleType: "none",
                        display: "flex",
                        gap: "30px",
                      }}
                    >
                      Available Colors :
                      {el.availableColors?.map((color, i) => {
                        return (
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
                            {" "}
                            &nbsp;
                          </li>
                        );
                      })}
                    </ul>
                  </Text>
                  <Text marginLeft={"20px"}>
                    Description : {el.description}
                  </Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
    </Box>
  );
};

export default OemModalData;
