const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 8080;
const app = express();

app.use(cors());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/api/v1/postersgrid", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${req.query.query}&language=${req.query.language}&page=${req.query.page}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/api/v1/filminfo", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${API_KEY}&language=${req.query.language}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
