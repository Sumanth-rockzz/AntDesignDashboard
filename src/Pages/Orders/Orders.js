import React, { useEffect, useState } from "react";
import { Typography, Table, Space } from "antd";
import { getOrders } from "../../API/API";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
      console.log(dataSource);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>₹ {value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span>₹ {value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>₹ {value}</span>,
          },
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Orders;
