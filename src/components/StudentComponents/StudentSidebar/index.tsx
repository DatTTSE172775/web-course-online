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
  );
};
export default StudentSidebar;
