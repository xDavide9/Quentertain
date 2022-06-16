import { useState } from "react";
import { Input, Select } from "antd";
import PostersGrid from "./PostersGrid";

const { Search } = Input;
const { Option } = Select;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("en");

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <Select
          defaultValue="en"
          style={{ width: "60px" }}
          onChange={(value) => {
            setLanguage(value);
          }}
        >
          <Option value="en">en</Option>
          <Option value="it">it</Option>
        </Select>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="medium"
          style={{
            width: "200px",
          }}
          onSearch={(value) => {
            setQuery(value);
          }}
        />
      </div>
      <PostersGrid query={query} language={language} />
    </div>
  );
};

export default SearchBar;
