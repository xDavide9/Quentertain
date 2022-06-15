import axios from "axios";
import APIKEY from "../config";
import { useEffect, useState } from "react";
import { Empty, Pagination } from "antd";

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

  if (results.length === 0 || !isSuccessfulRequest) return <Empty />;

  return (
    <>
      {results.map((result) => {
        if (result.release_date === "" || result.poster_path === null)
          return null;
        return (
          <div
            key={result.id}
            style={{
              margin: "10px",
              display: "inline-grid",
            }}
          >
            <img
              width="300px"
              height="450px"
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt="poster"
            />
          </div>
        );
      })}
      <Pagination
        defaultCurrent={1}
        total={totalPages}
        showSizeChanger={false}
        pageSize="1"
        onChange={(value) => {
          setPage(value);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        current={page}
        style={{
          padding: "20px",
        }}
      />
    </>
  );
};

export default PostersGrid;
