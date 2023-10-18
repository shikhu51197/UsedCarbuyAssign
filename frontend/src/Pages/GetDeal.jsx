import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMyDealFun,
  getMyDealFun,
} from "../Redux/marketplaceReducer/action";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  DarkMode,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assest/sammy.gif";

const GetDeal = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { myData, isLoading, isError } = useSelector(
    (store) => store.marketplaceReducer
  );

  const handleDelete = (id) => {
    dispatch(deleteMyDealFun(id)).then(() => {
      toast({
        title: "Data Delete Successfully",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(getMyDealFun());
    });
  };

  useEffect(() => {
    dispatch(getMyDealFun());
  }, []);

  if (isLoading === true) {
    return (
      <Image
        src="https://cdn.dribbble.com/users/543574/screenshots/4824123/ezgif.com-video-to-gif.gif"
        alt="loading"
        margin="auto"
        paddingTop="90px"
        marginBottom="360px"
      />
    );
  }
  if (isError === true) {
    return (
      <Image
        src="https://tse3.mm.bing.net/th?id=OIP.UR9mmwtD7RltXtpdFxHE2wHaDq&pid=Api&P=0&h=180"
        alt="error"
        margin="auto"
        paddingTop="30px"
      />
    );
  }

  return (
    <DarkMode>
      <Box style={{ paddingTop: "100px" }} h="100vh">
        <HStack margin="20px" marginLeft="70%" gap="40px">
        <Box width="50%">
          <Image src={logo} borderRadius={10} width="100%" />
        </Box>

          <Link to="/adddeal">
            <Button colorScheme="yellow" size="md">
              Add New Deal
            </Button>
          </Link>
          <Link to="/oem">
            <Button colorScheme="yellow" size="md">
              OEM Details
            </Button>
          </Link>
        </HStack>

        <TableContainer >
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>Product Image</Th>
                <Th>Product Details</Th>
                <Th>Edit Product Details</Th>
                <Th>Remove Product</Th>
              </Tr>
            </Thead>
            <Tbody overflow=
            'auto'>
              {myData?.map((el, i) => (
                <Tr key={i + 1}>
                  <Td>{i + 1}.</Td>
                  <Td>
                    {" "}
                    <Image src={el.imageURL} alt={el.title} width="100px" />
                  </Td>
                  <Td padding={"10px"}>
                    <Text marginBottom="10px" color="gray.300"> {/* Light gray text color */}
                      Manufacturer: {el.manufacturer}
                    </Text>
                    <Text marginBottom="10px" color="gray.400"> {/* Slightly darker gray text color */}
                      Title: {el.title}
                    </Text>
                    <Text marginBottom="10px" color="gray.500"> {/* Dark gray text color */}
                      Model: {el.model}
                    </Text>
                  </Td>
                  <Td>
                    <Link to={`/editDeal/${el?._id}`}>
                      <Button colorScheme="green">
                        <EditIcon />
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => handleDelete(el._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DarkMode>
  );
};

export default GetDeal;
