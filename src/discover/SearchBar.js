import { useState } from "react";
import { Input, Select } from "antd";
import PostersGrid from "./PostersGrid";
import keywords from "./keywords";
import { motion } from "framer-motion";

const { Search } = Input;
const { Option } = Select;

const SearchBar = () => {
  const [query, setQuery] = useState(
    () => keywords[Math.floor(Math.random() * keywords.length)]
  );
  const [language, setLanguage] = useState("en");

  return (
    <motion.div
      style={{
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          padding: "20px",
          paddingBottom: "10px",
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
            if (value === "") return;
            setQuery(value);
          }}
        />
      </div>
      <PostersGrid query={query} language={language} />
    </motion.div>
  );
};

export default SearchBar;
