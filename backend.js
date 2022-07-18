require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const app = express();

const PORT = 8080;

// 150 requests each 15 minutes from an ip
const minutes = 15;
const requests = 150;

const limiter = rateLimit({
  windowMs: minutes * 60 * 1000,
  max: requests,
});

app.use(cors());
app.use(limiter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/api/v1/postersgrid", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.query.query}&language=${req.query.language}&page=${req.query.page}`,
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
    url: `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${process.env.API_KEY}&language=${req.query.language}`,
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
