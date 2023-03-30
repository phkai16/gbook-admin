import React, { useState } from "react";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Avatar,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from "antd";
const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();

  form.setFieldsValue({
    username: "admin123",
    email: "admin@gmail.com",
    fullName: "Katarina Staforts",
    address: "Los Angeles",
    phone: "+123 456 789",
    role: "Admin",
    // dob: new Date(),
    gender: "Female",
  });
  return (
    <div className="container pt-2 mx-auto flex flex-col">
      <div className="relative">
        <div className="rounded-lg h-60 overflow-hidden">
          <picture>
            <source
              media="(min-width:980px)"
              srcSet="/profile-bg-lg.jpg"
              className="object-cover"
            />
            <img
              src="/profile-bg.jpg"
              alt="Flowers"
              className="w-full object-cover"
            />
          </picture>
        </div>
        <div
          className="absolute lg:bottom-3 bottom-16 left-6 bg-gray-300 rounded-full w-[120] h-[120] overflow-hidden"
          style={{ border: "4px solid white" }}
        >
          <Avatar size={120} icon={<UserOutlined />} />
        </div>
        <div className="ml-40 pt-6 lg:flex block items-center justify-between">
          <div className="">
            <h2 className="text-xl tracking-wide">Profile</h2>
            <p className="mt-2 text-gray-400">
              Update your photo and personal details
            </p>
          </div>
          <div className="flex gap-2 lg:mt-0 mt-4">
            {edit ? (
              <>
                <Button type="primary" ghost onClick={() => setEdit(false)}>
                  Cancel
                </Button>

                <Button type="primary" onClick={() => form.submit()}>
                  Save
                </Button>
              </>
            ) : (
              <Button type="primary" onClick={() => setEdit(true)}>
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-16 px-10">
        <>
          <Form
            form={form}
            // labelCol={{
            //   span: 4,
            // }}
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            className="w-full grid lg:grid-cols-2 grid-cols-1 gap-x-10"
            disabled={!edit}
          >
            {edit ? (
              <>
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
              </>
            ) : (
              <></>
            )}
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
            {/* <Form.Item label="Password" name="password" className="font-medium">
              <Input className="disabled:bg-white disabled:cursor-text disabled:text-gray-700" />
            </Form.Item> */}
            <Form.Item
              label="Full Name"
              name="fullName"
              className="font-medium"
            >
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
            {/* <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item> */}
          </Form>
        </>
      </div>
    </div>
  );
};

export default Profile;
