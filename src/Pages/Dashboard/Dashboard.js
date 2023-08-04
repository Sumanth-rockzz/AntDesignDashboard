import React, { useEffect, useState } from "react";
import { Typography, Space, Card, Statistic, Table } from "antd";
import "../../App.css";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { getOrders } from "../../API/API";
import DashboardChatBar from "./DashboardChatBar";
const Dashboard = () => {
  const DashboardCard = ({ title, value, icon }) => {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  };
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal" className="DashboardCard">
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
          value={123456}
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
          value={123456}
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
          value={123456}
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
          value={123456}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChatBar />
      </Space>
    </Space>
  );
};

const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
};

export default Dashboard;
