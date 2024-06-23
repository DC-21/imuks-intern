"use client";

import React, { useState, useEffect } from "react";
import { Layout, Menu, message } from "antd";
import {
  FormOutlined,
  HomeOutlined,
  ProfileOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    firstname: string;
    lastname: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserInfo(parsedUser);
          setIsLoggedIn(true);
        } catch (error) {
          message.error("Failed to parse user information from localStorage");
        }
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserInfo(null);
    message.success("Logged out successfully");
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <Link
            href="/"
            style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}
          >
            Imuks-Intern
          </Link>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flex: 2, justifyContent: "center" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            <Link href="/jobs">Jobs</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FormOutlined />}>
            <Link href="/application">Applications</Link>
          </Menu.Item>
        </Menu>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          {isLoading ? (
            <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} />
          ) : isLoggedIn ? (
            <>
              <span style={{ color: "#fff", marginRight: "16px" }}>
                {userInfo?.firstname} {userInfo?.lastname}
              </span>
              <button onClick={handleLogout} style={{ color: "#fff" }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" style={{ color: "#fff" }}>
                Sign In
              </Link>
              <Link href="/signup" style={{ color: "#fff" }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Imuks-Intern ©2024 Created by Frank Chikanku
      </Footer>
    </Layout>
  );
};

export default AppLayout;
