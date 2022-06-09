import { Layout, Menu } from "antd";
import { useState } from "react";
import Details from "./components/Details";
import Discover from "./components/Discover";
import "antd/dist/antd.min.css";

const { Header, Content, Footer } = Layout;

// THE APP SHOULD FOCUS ON DIFFERENT WAYS TO LOOK FOR A MOVIE
// SO THE MENU SHOULD HAVE ENTRIES LIKE RANDOM SEARCH, SEARCH BASED ON A KEYWORD, COMPANIES, COUNTRIES, GENRES ETC...
// AND A DETAIL ENTRY CONNECTED TO THEM IN SOME WAY TO BE DEFINED (BECAUSE GIVING THE ID TO THE USER THAT HAS TO INPUT IT IS POOR...)
// EACH MENU RENDERS DIFFERENT CONTENT ON THE SCREEN THROUGH A COMPONENT WITH THE SAME NAME

// to be defined dynamically
// query consists of keyword input by the user to find a list of films
// id can be associated to a specific film to get its details
let query = "";
let id = "";

// should have a button on the navbar or something to change the language
// for now only the api responses will change language
// only use the prefix (e.g. it) or leave blank for english as default
let language = "";

const App = () => {
  const [content, setContent] = useState("discover");

  // update this with the entry in the menu
  // other entry in the menu could be companies, countries, genres specific searches, random searches
  const renderContent = (content) => {
    switch (content) {
      case "discover":
        return <Discover query={query} language={language} />;
      case "details":
        return <Details id={id} language={language} />;
      default:
        return null;
    }
  };

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
              onClick: function () {
                setContent("discover");
              },
            },
            {
              label: "Details",
              key: "details",
              onClick: function () {
                setContent("details");
              },
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
        {renderContent(content)}
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
};

export default App;
