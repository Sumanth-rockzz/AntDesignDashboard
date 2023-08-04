import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Inventory from "../../Pages/Inventory/Inventory";
import Orders from "../../Pages/Orders/Orders";
import Customer from "../../Pages/Customers/Customer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customer />}></Route>
    </Routes>
  );
};

export default AppRoutes;
