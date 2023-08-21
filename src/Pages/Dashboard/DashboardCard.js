import React from "react";
import { Space, Card } from "antd";
import CountUp from "react-countup";

const DashboardCard = ({ title, value, icon }) => {
  const cardColors = ["#FF5F5F", "#59CD90", "#FFC53D", "#5B8FF9"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * cardColors.length);
    return cardColors[randomIndex];
  };

  const cardStyle = {
    backgroundColor: getRandomColor(),
    borderRadius: "8px",
    padding: "16px",
    color: "white",
  };

  return (
    <Card className="Card" style={cardStyle}>
      <Space direction="horizontal">
        {icon}
        <div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "4px",
            }}
          >
            {title}
          </p>
          <CountUp
            start={0}
            end={value}
            duration={2.5} // Animation duration in seconds
            separator=","
            style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}
          />
        </div>
      </Space>
    </Card>
  );
};

export default DashboardCard;
