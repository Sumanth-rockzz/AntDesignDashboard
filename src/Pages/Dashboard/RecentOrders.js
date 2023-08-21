import React, { useEffect, useState } from "react";
import { getOrders } from "../../API/API";
import { Table } from "antd";

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

  const columns = [
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
  ];

  return (
    <Table
      columns={columns}
      className="table-styling"
      loading={loading}
      dataSource={dataSource.map((item) => {
        item.key = item.id;
        return item;
      })}
      pagination={false}
    />
  );
};

export default RecentOrders;
