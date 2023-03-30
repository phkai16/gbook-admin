import React from "react";
import { Button, Form, Input, Modal } from "antd";
const AuthorModal = ({ isModalOpen, setIsModalOpen, id, setId }) => {
  console.log(id);
  const [form] = Form.useForm();
  const handleCancel = () => {
    setId(null);
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title={id ? "Single Author" : "Create New Author"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => form.submit()}
            className="capitalize"
            style={{ display: id ? "inline" : "none" }}
          >
            Save changes
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => form.submit()}
            className="capitalize"
            style={{ display: id ? "none" : "inline" }}
          >
            Create new
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mt-8 mb-12"
        >
          <Form.Item
            label="ID"
            name="id"
            style={{ display: id ? "block" : "none" }}
          >
            <Input
              disabled
              size="large"
              className="disabled:bg-white disabled:cursor-text"
            />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input author's name!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthorModal;
