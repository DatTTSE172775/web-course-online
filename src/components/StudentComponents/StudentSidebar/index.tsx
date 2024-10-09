import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const StudentSidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "250px",
        marginTop: "64px",
        position: "relative",
        height: "100vh",
        overflow: "auto",
        zIndex: 1,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={[
          {
            key: "dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "order",
            icon: <ShoppingCartOutlined />,
            label: "Order",
          },
          {
            key: "subscription",
            icon: <ProfileOutlined />,
            label: "Subscription",
          },
          {
            key: "setting",
            icon: <SettingOutlined />,
            label: "Setting",
          },
        ]}
      />
    </div>
  );
};
export default StudentSidebar;
