import { Layout, Menu } from "antd";
import { ArrowRightOutlined, HomeOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
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
              key: "/",
              icon: <HomeOutlined />,
              onClick: function () {
                props.navigate("/");
              },
            },
            {
              label: "Discover",
              key: "/discover",
              icon: <ArrowRightOutlined />,
              onClick: function () {
                props.navigate("/discover");
              },
            },
          ]}
          selectedKeys={[props.location.pathname]}
        />
      </Header>
      <Content
        style={{
          minHeight: "1200px",
          margin: "96px 50px 0px 50px",
          background: "#fff",
          overflow: "auto",
        }}
      >
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>2022 Quentertain & TMDb.</Footer>
    </Layout>
  );
};

export default CustomLayout;
