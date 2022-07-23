import "./Home.css";
import { Typography, Button } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./tmdblogo.svg";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fullscreen home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title id="home-title">Quentertain</Title>
      <img src={logo} alt="tdmb logo" className="tmdb-logo" />
      <Button type="primary" onClick={() => navigate("/discover")}>
        Start Now
      </Button>
    </motion.div>
  );
};

export default Home;
