import { Breadcrumb } from "antd";
import React from "react";

const BreadcrumbLink = () => {
  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
      }}
    >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Create</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbLink;
