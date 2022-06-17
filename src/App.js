import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout, Menu } from "antd";
import { ArrowRightOutlined, HomeOutlined } from "@ant-design/icons";
import Home from "./home/Home";
import SearchBar from "./discover/SearchBar";
import FilmInfo from "./discover/FilmInfo";
import ErrorPage from "./ErrorPage";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
          margin: "64px 50px 0px 50px",
          background: "#fff",
        }}
      >
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/discover" element={<SearchBar />} />
            <Route
              exact
              path="/discover/:id/:language"
              element={<FilmInfo />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
