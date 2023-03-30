import React from "react";
import {
  HomeOutlined,
  BuildOutlined,
  UserOutlined,
  LogoutOutlined,
  ReadOutlined,
  TeamOutlined,
  BookOutlined,
  TrophyOutlined,
  TrademarkCircleOutlined,
  TagsOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BreadcrumbLink from "./BreadcrumbLink";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const dropdownItems = [
  getItem("Profile", "13", <UserOutlined />),
  getItem("Logout", "", <LogoutOutlined />),
];
const keyLink = {
  1: "/books",
  2: "/books/create",
  3: "/authors",
  4: "/genres",
  5: "/awards",
  6: "/characters",
  7: "/series",
  8: "/book-formats",
  9: "/publishers",
  10: "/languages",
  11: "/users",
  12: "/users/create",
  13: "/profile",
  14: "/",
};
const LayoutGeneral = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (number) => {
    if (number) {
      keyLink[number] && navigate(`${keyLink[number]}`);
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dropdownMenu = (
    <Menu items={dropdownItems} onClick={(e) => handleNavigate(e.key)} />
  );
  const items = [
    getItem("Home", "14", <HomeOutlined />),
    getItem("User", "main1", <TeamOutlined />, [
      getItem("List", "11"),
      getItem("Create", "12"),
    ]),
    getItem("Book", "main2", <ReadOutlined />, [
      getItem("List", "1"),
      getItem("Create", "2"),
    ]),
    getItem("Author", "3", <TeamOutlined />),
    getItem("Genre", "4", <TagsOutlined />),
    getItem("Award", "5", <TrophyOutlined />),
    getItem("Character", "6", <TeamOutlined />),
    getItem("Series", "7", <BuildOutlined />),
    getItem("Book Format", "8", <BookOutlined />),
    getItem("Publisher", "9", <TrademarkCircleOutlined />),
    getItem("Language", "10", <TranslationOutlined />),

    getItem("Profile", "13", <UserOutlined />),
    getItem("Logout", "main2", <LogoutOutlined />),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            margin: 16,
          }}
          className="flex items-center gap-1"
        >
          <img src="/logo-icon.png" alt="" className="h-10" />
          <span
            className="text-white text-xl font-medium"
            style={{ display: collapsed ? "none" : "block" }}
          >
            GBooks
          </span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => handleNavigate(e.key)}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="px-4 flex items-center justify-end bg-white">
          <Dropdown overlay={dropdownMenu}>
            <div className="flex items-center cursor-pointer">
              <span className="mr-2">Welcome, Admin</span>
              <Avatar size={44} icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <BreadcrumbLink />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              paddingBottom: 150,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutGeneral;
