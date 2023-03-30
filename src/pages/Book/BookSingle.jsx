import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Space, Upload } from "antd";
const { TextArea } = Input;
const onSearch = (value) => {
  console.log("search:", value);
};
//Select Multiple
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const BookSingle = () => {
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();
  return (
    <>
      <Space className="flex items-center justify-between mb-10">
        <h2 className="capitalize  text-2xl">Single Book</h2>
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
              Edit Book
            </Button>
          )}
        </div>
      </Space>
      <Form
        form={form}
        disabled={!edit}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        style={{
          minWidth: 800,
        }}
        className="grid lg:grid-cols-2 gap-x-10 grid-cols-1 lg:px-10 px-0"
      >
        <Form.Item
          className="font-medium"
          label="Cover Image"
          valuePropName="fileList"
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
        <Form.Item className="font-medium" label="Description">
          <TextArea
            rows={4}
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Title">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Edition">
          <Input
            size="large"
            className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
          />
        </Form.Item>

        <Form.Item className="font-medium" label="Author">
          {edit ? (
            <Select
              size="large"
              showSearch
              placeholder="Select an author"
              optionFilterProp="children"
              defaultValue="lucy"
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Series">
          {edit ? (
            <Select
              size="large"
              showSearch
              placeholder="Select an author"
              optionFilterProp="children"
              defaultValue="lucy"
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Book Format">
          {edit ? (
            <Select
              size="large"
              showSearch
              placeholder="Select an author"
              optionFilterProp="children"
              defaultValue="lucy"
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Publisher">
          {edit ? (
            <Select
              size="large"
              showSearch
              placeholder="Select an author"
              optionFilterProp="children"
              defaultValue="lucy"
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Language">
          {edit ? (
            <Select
              size="large"
              showSearch
              placeholder="Select an author"
              optionFilterProp="children"
              defaultValue="lucy"
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>

        <Form.Item className="font-medium" label="Characters">
          {edit ? (
            <Select
              size="large"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          ) : (
            <TextArea
              rows={3}
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Genres">
          {edit ? (
            <Select
              size="large"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          ) : (
            <TextArea
              rows={3}
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Awards">
          {edit ? (
            <Select
              size="large"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          ) : (
            <TextArea
              rows={3}
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Rating">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              max={5}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Pages">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Number Ratings">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Liked Percent">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Price">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        <Form.Item className="font-medium" label="Length">
          {edit ? (
            <InputNumber
              className="w-1/2"
              min={0}
              defaultValue={0}
              size="large"
            />
          ) : (
            <Input
              size="large"
              className="disabled:bg-white disabled:cursor-text disabled:text-gray-700"
            />
          )}
        </Form.Item>
        {/* <Form.Item className="font-medium">
          <Button
            size="large"
            htmlType="submit"
            // loading={isLoading}
            // disabled={loading}
            className="font-medium capitalize bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-spacing-1 hover:border-blue-500 w-2/3 min-w-[200px]"
          >
            Create new
          </Button>
        </Form.Item> */}
      </Form>
    </>
  );
};

export default BookSingle;
