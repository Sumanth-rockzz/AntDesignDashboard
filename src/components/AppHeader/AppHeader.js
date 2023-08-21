import React, { useEffect, useState } from "react";
import "../../App.css";
import { Image, Space, Typography, Badge, Drawer, List } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { getComments, getOrders } from "../../API/API";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setNotifications(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
      ></Image>
      <Typography.Title className="BrandName" level={4}>
        InstaMart DashBoard
      </Typography.Title>
      <Space style={{ marginRight: "25px" }}>
        <Badge count={comments?.length || 0} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={notifications?.length || 0}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        maskClosable
      ></Drawer>
    </div>
  );
};

export default AppHeader;
