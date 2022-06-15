import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Discover from "./discover/Discover";
import "antd/dist/antd.min.css";

const { Header, Content, Footer } = Layout;

// resolve menu item issue

const App = () => {
  return (
    <Router>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/discover"}>Discover</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            minHeight: "1200px",
            margin: "64px 32px 0px 32px",
            background: "#fff",
          }}
        >
          <Routes>
            <Route path="/" element={<div>THIS IS HOME</div>} />
            <Route path="/discover" element={<Discover />} />
            <Route path="*" element={<div>ERROR 404</div>} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default App;
