import axios from "axios";
import APIKEY from "../config.js";
import { useEffect, useState } from "react";

function Details(props) {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=${APIKEY}`)
      .then((res) => {
        console.log(res.data);
        setFilm(res.data);
        setGenres(res.data.genres);
        setCompanies(res.data.production_companies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <div>
      {/* create ui */}
      TITLE: {film.title}
      <br />
      <br />
      OVERVIEW: {film.overview}
      <br />
      <br />
      RELEASE_DATE: {film.release_date}
      <br />
      <br />
      GENRES:{" "}
      {genres.map((genre, index) => {
        if (index === genres.length - 1) return String(genre.name);
        return String(genre.name) + ", ";
      })}
      <br />
      <br />
      COMPANIES:{" "}
      {companies.map((company, index) => {
        if (index === companies.length - 1) return String(company.name);
        return String(company.name) + ", ";
      })}
      <br />
      <br />
      {/* w500 w342 w185 w154 w92 w45 */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt="poster"
      />
    </div>
  );
}

export default Details;
