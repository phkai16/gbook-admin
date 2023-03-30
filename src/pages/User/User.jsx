import React, { useState, useRef } from "react";
import { Button, Space, Table, Input } from "antd";

import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

//Data Antd
const data = [
  {
    key: "1",
    username: "Aimee Brown",
    email: 32,
    role: "admin",
  },
  {
    key: "2",
    username: "Blade Green",
    email: 42,
    role: "client",
  },
  {
    key: "3",
    username: "Joe Black",
    email: 32,
    role: "client",
  },
  {
    key: "4",
    username: "Kat Red",
    email: 32,
    role: "client",
  },
];
const User = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  //Search Antd
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      ...getColumnSearchProps("username"),

      filterSearch: true,
      sorter: (a, b) => a.username.length - b.username.length,
      sortOrder: sortedInfo.columnKey === "username" ? sortedInfo.order : null,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",

      ...getColumnSearchProps("email"),
      filterSearch: true,
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        {
          text: "Admin",
          value: "admin",
        },
        {
          text: "Client",
          value: "client",
        },
      ],
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.role.includes(value),
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "key",
      render: (id) => (
        <Space size="middle">
          <Link to={`/users/${id}`}>
            <Button type="primary" ghost>
              View
            </Button>
          </Link>
          <Button
            danger
            // loading={deleteArticleLoading}
            // onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Space className="flex justify-between items-center mb-10">
        <h2 className="capitalize text-2xl">User List</h2>
        <Link to={"/users/create"}>
          <Button className="capitalize bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-spacing-1 hover:border-blue-500">
            <PlusCircleOutlined className="mr-1" /> Create New
          </Button>
        </Link>
      </Space>
      <Space className="mb-4">
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};

export default User;
