// create home page

import { Typography, Divider, Button, Row } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Wrapper from "../util/Wrapper";

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Wrapper>
        <Button
          type="primary"
          onClick={function () {
            navigate("/discover");
          }}
        >
          Start Now
        </Button>
      </Wrapper>
    </motion.div>
  );
};

// make the background same as logo and write some info about the app

export default Home;
