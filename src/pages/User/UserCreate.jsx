import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, Select, Upload } from "antd";

const UserCreate = () => {
  return (
    <>
      <h2 className="capitalize mb-10 text-2xl">Create new User</h2>

      <Form
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        className="w-full grid lg:grid-cols-2 grid-cols-1 gap-x-10 px-10"
      >
        <Form.Item
          label="Avatar"
          valuePropName="fileList"
          className="font-medium"
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item></Form.Item>

        <Form.Item label="Username" name="username" className="font-medium">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item label="Email" name="email" className="font-medium">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item label="Password" name="password" className="font-medium">
          <Input className="disabled:bg-white disabled:cursor-text disabled:text-gray-700" />
        </Form.Item>
        <Form.Item label="Full Name" name="fullName" className="font-medium">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item label="Address" name="address" className="font-medium">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item label="Phone" name="phone" className="font-medium">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item label="Account Role" name="role" className="font-medium">
          <Select defaultValue="client" size="large">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="client">Client</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DOB" name="dob" className="font-medium">
          <DatePicker size="large" style={{ minWidth: 250 }} />
        </Form.Item>

        <Form.Item label="Gender" name="gender" className="font-medium">
          <Radio.Group defaultValue="male">
            <Radio value="male">Male</Radio>
            <Radio value="pear"> Female </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
        // wrapperCol={{
        //   offset: 6,
        // }}
        >
          <Button
            htmlType="submit"
            size="large"
            // loading={isLoading}
            // disabled={loading}
            className="font-medium capitalize bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-spacing-1 hover:border-blue-500 w-2/3 min-w-[200px]"
          >
            Create new
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserCreate;
