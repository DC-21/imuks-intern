"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { FormOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ flex: 1 }}>
          <Link
            href="/"
            style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}
          >
            Imuks-Intern
          </Link>
        </div>

        {/* Centered Menu Items */}
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

        {/* Right-aligned Links */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          <Link href="/signin" style={{ color: "#fff" }}>
            Sign In
          </Link>
          <Link href="/signup" style={{ color: "#fff" }}>
            Sign Up
          </Link>
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
