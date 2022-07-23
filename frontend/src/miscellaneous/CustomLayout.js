import "./CustomLayout.css";
import { Layout, Menu } from "antd";
import { ArrowRightOutlined, HomeOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    <Layout>
      <Header id="header">
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              label: "Home",
              key: "/",
              icon: <HomeOutlined />,
              onClick: () => {
                props.navigate("/");
              },
            },
            {
              label: "Discover",
              key: "/discover",
              icon: <ArrowRightOutlined />,
              onClick: () => {
                props.navigate("/discover");
              },
            },
          ]}
          selectedKeys={[props.location.pathname]}
        />
      </Header>
      <Content id="content">{props.children}</Content>
      <Footer id="footer">2022 Quentertain & TMDb.</Footer>
    </Layout>
  );
};

export default CustomLayout;
