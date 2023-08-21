import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import { Menu } from "antd";

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{ display: "flex" }}>
      <Menu
        style={{ minWidth: 0, flex: "auto" }}
        className="SideMenu"
        mode="inline"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "DashBoard",
            icon: <AppstoreOutlined style={{ fontSize: "1rem" }} />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined style={{ fontSize: "1rem" }} />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined style={{ fontSize: "1rem" }} />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined style={{ fontSize: "1rem" }} />,
            key: "/customers",
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;
