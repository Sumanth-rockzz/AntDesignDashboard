import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import DashboardCard from "./DashboardCard";
import RecentOrders from "./RecentOrders";
import DashboardChatBar from "./DashboardChatBar";
import "../../App.css";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { getCustomers, getInventory, getOrders } from "../../API/API";

const Dashboard = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [revenueTotal, setRevenueTotal] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrdersCount(res.total);
      setRevenueTotal(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventoryCount(res.total);
    });
    getCustomers().then((res) => {
      setCustomersCount(res.total);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div className="dashboard-card-container">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                fontSize: 24,
                borderRadius: 20,
                backgroundColor: "rgba(0,255,0,0.25)",
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={ordersCount}
        />
        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: "blue",
                fontSize: 24,
                borderRadius: 20,
                backgroundColor: "rgba(0,0,255,0.25)",
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value={inventoryCount}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "blue",
                fontSize: 24,
                borderRadius: 20,
                backgroundColor: "rgba(0,255,0,0.25)",
                padding: 8,
              }}
            />
          }
          title="Customers"
          value={customersCount}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                fontSize: 24,
                borderRadius: 20,
                backgroundColor: "rgba(255,0,0,0.25)",
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value={revenueTotal}
        />
      </div>
      <Typography.Title level={4}>
        Recent Orders And Sales Chart
      </Typography.Title>
      <div className="dashboard-components-container">
        <RecentOrders />
        <DashboardChatBar />
      </div>
    </div>
  );
};

export default Dashboard;
