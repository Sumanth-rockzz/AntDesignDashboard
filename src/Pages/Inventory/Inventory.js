import React, { useEffect, useState } from "react";
import { Typography, Table, Space, Avatar, Rate } from "antd";
import { getInventory } from "../../API/API";

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => <Rate value={rating} allowHalf disabled />,
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
        ]}
        dataSource={dataSource.map((item) => {
          item.key = item.id;
          return item;
        })}
        className="table-styling"
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Inventory;
