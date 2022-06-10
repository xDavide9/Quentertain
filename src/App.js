import { Layout, Menu, Input, Select } from "antd";
import { useState } from "react";
import SearchResultsList from "./components/SearchResultsList";
import "antd/dist/antd.min.css";

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

// do not make the mistake of working on the menu if you dont know yet what display on the screen
// because the menu should be based on that and not the opposite
// should work on the menu since the idea is not to render content off of it
// but to tweak the ui or provide some functionality related to the content
// maybe with dropdowns which looks cool

// now the propose the user a series of results in the form of a list or smt
// which can be clicked to fetch details of it

// add a working loading icon (the api errors are already covered in each component)

const App = () => {
  const [query, setQuery] = useState("");
  const [id, setId] = useState(0);
  const [language, setLanguage] = useState("");

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
        ></Menu>
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
              }}
              onSearch={(value) => {
                setQuery(value);
              }}
            />
          </div>
          <SearchResultsList query={query} language={language} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
