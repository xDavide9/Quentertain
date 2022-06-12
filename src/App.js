import { Layout, Menu, Input, Select } from "antd";
import { useState } from "react";
import PostersGrid from "./components/PostersGrid";
import "antd/dist/antd.min.css";

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

const App = () => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("en");

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              label: "Discover",
              key: "discover",
            },
          ]}
          defaultSelectedKeys={["discover"]}
        />
      </Header>
      <Content
        style={{
          minHeight: "1200px",
          textAlign: "center",
          margin: "96px 32px 0px 32px",
          background: "#fff",
        }}
      >
        <div>
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
                maxWidth: "200px",
                zIndex: 0,
              }}
              onSearch={(value) => {
                setQuery(value);
              }}
            />
          </div>
          <PostersGrid query={query} language={language} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
