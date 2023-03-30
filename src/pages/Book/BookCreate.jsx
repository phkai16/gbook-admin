import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
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
const BookCreate = () => {
  return (
    <>
      <h2 className="capitalize mb-10 text-2xl">Create new book</h2>
      <Form
        // labelCol={{
        //   span: 6,
        // }}
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
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item className="font-medium" label="Title">
          <Input size="large" />
        </Form.Item>
        <Form.Item className="font-medium" label="Edition">
          <Input size="large" />
        </Form.Item>

        <Form.Item className="font-medium" label="Author">
          <Select
            size="large"
            showSearch
            placeholder="Select an author"
            optionFilterProp="children"
            defaultValue="lucy"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </Form.Item>
        <Form.Item className="font-medium" label="Series">
          <Select
            size="large"
            showSearch
            placeholder="Select a series"
            optionFilterProp="children"
            defaultValue="lucy"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </Form.Item>
        <Form.Item className="font-medium" label="Book Format">
          <Select
            size="large"
            showSearch
            placeholder="Select book format"
            optionFilterProp="children"
            defaultValue="lucy"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </Form.Item>
        <Form.Item className="font-medium" label="Publisher">
          <Select
            size="large"
            showSearch
            placeholder="Select publisher"
            optionFilterProp="children"
            defaultValue="lucy"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </Form.Item>
        <Form.Item className="font-medium" label="Language">
          <Select
            size="large"
            showSearch
            placeholder="Select a language"
            defaultValue="lucy"
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </Form.Item>

        <Form.Item className="font-medium" label="Characters">
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
        </Form.Item>
        <Form.Item className="font-medium" label="Genres">
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
        </Form.Item>
        <Form.Item className="font-medium" label="Awards">
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
        </Form.Item>
        <Form.Item className="font-medium" label="Rating">
          <InputNumber
            min={0}
            max={5}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Pages">
          <InputNumber
            min={0}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Number Ratings">
          <InputNumber
            min={0}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Liked Percent">
          <InputNumber
            min={0}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Price">
          <InputNumber
            min={0}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium" label="Length">
          <InputNumber
            min={0}
            defaultValue={0}
            size="large"
            className="w-1/2"
          />
        </Form.Item>
        <Form.Item className="font-medium">
          <Button
            size="large"
            htmlType="submit"
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

export default BookCreate;
