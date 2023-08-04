import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Menu } from "antd";

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        items={[
          {
            label: "DashBoard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;
