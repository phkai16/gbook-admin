import React, { useState, useRef } from "react";
import { Button, Space, Table, Input } from "antd";

import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

//Data Antd
const data = [
  {
    key: "1",
    title: "Aimee Brown",
    author: 32,
    genres: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    title: "Blade Green",
    author: 42,
    genres: "London No. 1 Lake Park",
  },
  {
    key: "3",
    title: "Joe Black",
    author: 32,
    genres: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    title: "Kat Red",
    author: 32,
    genres: "London No. 2 Lake Park",
  },
];
const Book = () => {
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      filterSearch: true,
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      ...getColumnSearchProps("author"),
      filterSearch: true,
      sorter: (a, b) => a.author.length - b.author.length,
      sortOrder: sortedInfo.columnKey === "author" ? sortedInfo.order : null,
    },

    {
      title: "Genres",
      dataIndex: "genres",
      key: "genres",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filteredValue: filteredInfo.genres || null,
      onFilter: (value, record) => record.genres.includes(value),
      // ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "key",
      render: (id) => (
        <Space size="middle">
          <Link to={`/books/${id}`}>
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
        <h2 className="capitalize text-2xl">Book List</h2>
        <Link to="/books/create">
          <Button className="bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-spacing-1 hover:border-blue-500">
            <PlusCircleOutlined className="mr-1" /> Create Book
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

export default Book;
