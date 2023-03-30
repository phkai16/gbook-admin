import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="grid  lg:grid-cols-2 grid-cols-1  gap-10 w-full p-10 lg:text-start text-center">
      <div className="">
        <img src="/logo.png" alt="" className="h-20" />
        <img src="/login-bg.jpg" alt="" className="w-full lg:block hidden" />
      </div>
      <div className="flex flex-col justify-center lg:items-start items-center">
        <h2 className="text-3xl -tracking-tight">Welcome Back!</h2>
        <p className="mt-2 mb-10 text-gray-400">Login to continue</p>
        <Form
          name="normal_login"
          className="login-form lg:w-1/2 sm:w-2/3 w-full"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon mr-2" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon mr-2" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-form-button w-full font-semibold"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-12 flex items-center gap-4 lg:w-1/2 sm:w-2/3 w-full">
          <p className="text-gray-400 text-sm">Login with</p>
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-zinc-100 flex-shrink-0 cursor-pointer">
            <img src="/gg-icon.png" alt="" className="w-6 h-6" />
          </div>
          <p className=" text-sm ml-auto capitalize text-blue-600 cursor-pointer">
            Forget password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
