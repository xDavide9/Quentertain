import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Discover from "./discover/Discover";
import "antd/dist/antd.min.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();

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
              label: "Home",
              key: "home",
              onClick: function () {
                navigate("/");
              },
            },
            {
              label: "Discover",
              key: "discover",
              onClick: function () {
                navigate("/discover");
              },
            },
          ]}
          defaultSelectedKeys={["home"]}
        />
      </Header>
      <Content
        style={{
          minHeight: "1200px",
          margin: "64px 32px 0px 32px",
          background: "#fff",
        }}
      >
        <Routes>
          <Route exact path="/" element={<div>THIS IS HOME</div>} />
          <Route exact path="/discover" element={<Discover />} />
          <Route path="*" element={<div>ERROR 404</div>} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
