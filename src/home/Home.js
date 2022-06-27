import { Typography, Divider } from "antd";
import { motion } from "framer-motion";

const Home = () => {
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
      <div
        style={{
          minWidth: "900px",
          maxWidth: "900px",
          minHeight: "1200px",
          overflowWrap: "break-word",
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        <Typography
          style={{
            fontSize: "50px",
            paddingTop: "15px",
          }}
        >
          Quentertain
        </Typography>
        <Divider />
        <Typography
          style={{
            fontSize: "22px",
          }}
        >
          Find your new favourite films!
        </Typography>
      </div>
    </motion.div>
  );
};

// make the background same as logo and write some info about the app

export default Home;
