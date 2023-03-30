import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";

const UserCreate = () => {
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();
  return (
    <>
      <Space className="flex items-center justify-between mb-10">
        <h2 className="capitalize  text-2xl">Single User</h2>
        <div className="flex gap-2 lg:mt-0 mt-4">
          {edit ? (
            <>
              <Button
                size="large"
                type="primary"
                ghost
                onClick={() => setEdit(false)}
              >
                Cancel
              </Button>

              <Button size="large" type="primary" onClick={() => form.submit()}>
                Save Changes
              </Button>
            </>
          ) : (
            <Button size="large" type="primary" onClick={() => setEdit(true)}>
              Edit User
            </Button>
          )}
        </div>
      </Space>

      <Form
        disabled={!edit}
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
          {edit ? (
            <Select defaultValue="client" size="large">
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="client">Client</Select.Option>
            </Select>
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item label="DOB" name="dob" className="font-medium">
          {edit ? (
            <DatePicker size="large" style={{ minWidth: 250 }} />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>

        <Form.Item label="Gender" name="gender" className="font-medium">
          {edit ? (
            <Radio.Group defaultValue="male">
              <Radio value="male">Male</Radio>
              <Radio value="pear"> Female </Radio>
              <Radio value="other"> Other </Radio>
            </Radio.Group>
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default UserCreate;
