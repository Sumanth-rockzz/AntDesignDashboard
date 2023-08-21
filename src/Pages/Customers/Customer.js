import React, { useEffect, useState } from "react";
import { Typography, Table, Space, Avatar } from "antd";
import { getCustomers } from "../../API/API";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        columns={[
          {
            title: "Profile",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            render: (value) => <span>₹ {value}</span>,
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Contact Number",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address},{address.city}
                </span>
              );
            },
          },
        ]}
        className="table-styling"
        dataSource={dataSource.map((item) => {
          item.key = item.id;
          return item;
        })}
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
