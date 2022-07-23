import "./DiscoverButtons.css";
import { useState } from "react";
import { Button, Input, Select } from "antd";
import DiscoverPosters from "./DiscoverPosters";
import keywords from "./keywords";
import { motion } from "framer-motion";

const { Search } = Input;
const { Option } = Select;

const DiscoverButtons = () => {
  const [query, setQuery] = useState(
    () => keywords[Math.floor(Math.random() * keywords.length)]
  );
  const [language, setLanguage] = useState("en");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="buttons-container">
        <Select
          defaultValue="en"
          onChange={(value) => {
            setLanguage(value);
          }}
        >
          <Option value="en">English</Option>
          <Option value="it">Italian</Option>
        </Select>
        <Search
          placeholder="input search text"
          enterButton="Search"
          style={{ width: "200px" }}
          onSearch={(value) => {
            if (value === "") return;
            setQuery(value);
          }}
        />
        <Button
          onClick={() =>
            setQuery(keywords[Math.floor(Math.random() * keywords.length)])
          }
        >
          Random
        </Button>
      </div>
      <DiscoverPosters query={query} language={language} />
    </motion.div>
  );
};

export default DiscoverButtons;
