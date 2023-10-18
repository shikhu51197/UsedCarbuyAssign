import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import NotFound from "../Pages/NotFound";
import AddDeal from "../Pages/AddDeal";
import PrivateRoute from "./PrivateRoute";
import SingleDeal from "../Pages/SingleDeal";
import GetDeal from "../Pages/GetDeal";
import Oem from "../Pages/Oem";
import EditDeal from "../Pages/EditDeal";
import OemModal from "../Pages/OemModal";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/getdeal"
          element={
            <PrivateRoute>
              <GetDeal />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/deal/:id" element={<SingleDeal />}></Route>
        <Route path="/editDeal/:editID" element={<EditDeal />}></Route>
        <Route path="/adddeal" element={<AddDeal />}></Route>
        <Route path="/oem" element={<Oem />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
