import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ArrowRightOutlined, HomeOutlined } from "@ant-design/icons";
import Home from "./home/Home";
import SearchBar from "./discover/SearchBar";
import FilmInfo from "./discover/FilmInfo";
import ErrorPage from "./ErrorPage";
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
              icon: <HomeOutlined />,
              onClick: function () {
                navigate("/");
              },
            },
            {
              label: "Discover",
              key: "discover",
              icon: <ArrowRightOutlined />,
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<SearchBar />} />
          <Route exact path="/discover/:id/:language" element={<FilmInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
