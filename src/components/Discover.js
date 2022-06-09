import axios from "axios";
import APIKEY from "../config";
import { useEffect, useState } from "react";

// discover a movie id by searching keywords

const Discover = (props) => {
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${props.query}&language=${props.language}`
      )
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
        setSuccessfulRequest(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccessfulRequest(false);
      });
  }, [props.query, props.language]);

  if (results.length === 0 || !isSuccessfulRequest)
    return (
      // do it better with the cool icon
      <div>no data</div>
    );

  return (
    <div>
      {results.map((result) => (
        <p key={result.id}>{`${result.title} ${result.id}`}</p>
      ))}
    </div>
  );
};

export default Discover;
