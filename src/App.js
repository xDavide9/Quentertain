import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import { useState } from "react";
import Details from "./components/Details";
import Discover from "./components/Discover";

const { Header, Content, Footer } = Layout;

function App() {
  const [content, setContent] = useState("discover");
  const onDiscover = () => {
    setContent("discover");
  };
  const onDetails = () => {
    setContent("details");
  };
  const items = [
    {
      label: "Discover",
      onClick: onDiscover,
    },
    {
      label: "Details",
      onClick: onDetails,
    },
  ];

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" items={items}></Menu>
      </Header>
      <Content
        style={{
          minHeight: "1200px",
          textAlign: "center",
          margin: "50px 50px 0px 50px",
          background: "#fff",
        }}
      >
        {/* IMPROVE WITH IF STATEMENT AND NOT TERNARY */}
        {content === "discover" ? <Discover /> : <Details id={500} />}
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}

export default App;
