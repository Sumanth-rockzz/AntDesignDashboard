import React from "react";
import "../../App.css";
import { Image, Space, Typography, Badge } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
      ></Image>
      <Typography.Title style={{ marginTop: "12px" }}>
        Admin DashBoard
      </Typography.Title>
      <Space>
        <Badge count={20} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
