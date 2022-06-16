import axios from "axios";
import APIKEY from "../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Empty } from "antd";

const FilmInfo = () => {
  const { id, language } = useParams();
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${language}`
      )
      .then((res) => {
        console.log(res);
        setFilm(res.data);
        setGenres(res.data.genres);
        setCompanies(res.data.production_companies);
        setCountries(res.data.production_countries);
        setSuccessfulRequest(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccessfulRequest(false);
      });
  }, [id, language]);

  if (isSuccessfulRequest)
    return (
      // create gui
      <>
        <p>TITLE: {film.title} </p>
        <p>OVERVIEW: {film.overview} </p>
        <p>TAGLINE: {film.tagline} </p>
        <p>RELEASE_DATE: {film.release_date} </p>
        <p>ADULT: {String(film.adult)} </p>
        <p>BUDGET: {film.budget} </p>
        <p>REVENUE: {film.revenue} </p>
        <p>PROFIT: {String(Number(film.revenue) - Number(film.budget))} </p>
        <p>POPULARITY: {film.popularity} </p>
        <p>RUNTIME: {film.runtime} </p>
        <p>
          GENRES:{" "}
          {genres.map((genre, index) => {
            if (index === genres.length - 1) return String(genre.name);
            return String(genre.name) + ", ";
          })}
        </p>
        <p>
          COMPANIES:{" "}
          {companies.map((company, index) => {
            if (index === companies.length - 1) return String(company.name);
            return String(company.name) + ", ";
          })}
        </p>
        <p>
          COUNTRIES:{" "}
          {countries.map((country, index) => {
            if (index === countries.length - 1) return String(country.name);
            return String(country.name) + ", ";
          })}
        </p>
        <p>
          {/* w500 w342 w185 w154 w92 w45 */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt="poster"
          />
        </p>
        <p>
          {/* idk if use it or not */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
            alt="backdrop"
          />
        </p>
      </>
    );

  return <Empty />;
};

export default FilmInfo;
