import axios from "axios";
import APIKEY from "../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Empty, Pagination, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./PostersGrid.css";

const PostersGrid = (props) => {
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${props.query}&language=${props.language}&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
        setTotalPages(res.data.total_pages);
        setSuccessfulRequest(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccessfulRequest(false);
      });
  }, [props.query, props.language, page]);

  useEffect(() => {
    setPage(1);
  }, [props.query]);

  if (results.length === 0 || !isSuccessfulRequest)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <Empty />
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {results.map((result) => {
        if (result.release_date === "" || result.poster_path === null)
          return null;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: "inline-grid",
              margin: "9px",
            }}
          >
            <Link to={`/discover/${result.id}/${props.language}`}>
              <div className="img-wrapper">
                <img
                  width="300px"
                  height="450px"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt="poster"
                />
                <Typography className="content fade">
                  Preview <EyeOutlined />
                </Typography>
              </div>
            </Link>
          </motion.div>
        );
      })}
      <Pagination
        defaultCurrent={1}
        total={totalPages}
        showSizeChanger={false}
        pageSize="1"
        current={page}
        style={{ padding: "11px 0 20px 0" }}
        onChange={(value) => {
          setPage(value);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </motion.div>
  );
};

export default PostersGrid;
