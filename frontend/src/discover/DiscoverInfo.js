import "./DiscoverInfo.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Empty,
  Row,
  Typography,
  Col,
  Divider,
  Image,
  Descriptions,
  Space,
  Tooltip,
  Progress,
  Card,
  notification,
} from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Item } = Descriptions;

const DiscoverInfo = () => {
  const { id, language } = useParams();
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [film, setFilm] = useState([]);
  const [ellipsis, setEllipsis] = useState(true);
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8080/api/v1/discover/info",
      params: { id: id, language: language },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res);
        setFilm(res.data);
        setGenres(res.data.genres);
        setCompanies(res.data.production_companies);
        setCountries(res.data.production_countries);
        setSuccessfulRequest(true);
      })
      .catch((err) => {
        notification.error({
          message: `Error ${err.response.status}`,
          description: (
            <>
              {err.message} <br /> {err.response.data}
            </>
          ),
        });
        setSuccessfulRequest(false);
      });
  }, [id, language]);

  if (isSuccessfulRequest)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="top-level-container-info">
          <div>
            <Title id="title">{film.title} </Title>
            <Paragraph>
              {film.overview === "" ? <></> : film.overview}
            </Paragraph>
            <Paragraph>
              Tagline {film.tagline === "" ? <>N/A</> : film.tagline}
            </Paragraph>
            <Paragraph>
              Homepage {film.homepage === "" ? <>N/A</> : film.homepage}
            </Paragraph>
            <Paragraph>
              Release Date{" "}
              <Tooltip color="blue" title="yyyy-mm-dd">
                {film.release_date === "" ? <>N/A</> : film.release_date}
              </Tooltip>
            </Paragraph>
            <Paragraph>
              IMDB ID{" "}
              <Tooltip color="blue" title="International Movie Database id">
                {film.imdb_id === "" ? <>N/A</> : film.imdb_id}
              </Tooltip>
            </Paragraph>
            <Paragraph>
              Original Language{" "}
              {film.original_language === "" ? (
                <>N/A</>
              ) : (
                film.original_language
              )}
            </Paragraph>
            <Paragraph>
              Original Title{" "}
              {film.original_title === "" ? <>N/A</> : film.original_title}
            </Paragraph>
            <Paragraph>
              Vote Average{" "}
              {film.vote_average === "" ? <>N/A</> : film.vote_average}
            </Paragraph>
            <Paragraph>
              Vote Count {film.vote_count === "" ? <>N/A</> : film.vote_count}
            </Paragraph>
            <Paragraph>
              Adult Film{" "}
              {film.adult === "" ? <>N/A</> : film.adult ? <>Yes</> : <>No</>}
            </Paragraph>
            <Paragraph>
              <Progress
                type="circle"
                width={150}
                percent={film.popularity}
                format={() => film.popularity.toFixed(2)}
              />
              <Progress
                type="circle"
                width={150}
                percent={film.runtime / 2}
                format={() =>
                  `${~~(film.runtime / 60)} h ${film.runtime % 60} m`
                }
              />
              <Progress
                type="circle"
                width={150}
                percent={film.revenue / 10_000_000}
                format={() =>
                  film.revenue === 0
                    ? "N/A "
                    : `${(film.revenue / 1_000_000).toFixed(0)} mln`
                }
              />
              <Progress
                type="circle"
                width={150}
                percent={film.budget / 1_000_000}
                format={() =>
                  film.budget === 0
                    ? "N/A "
                    : `${(film.budget / 1_000_000).toFixed(0)} mln`
                }
              />
            </Paragraph>
          </div>
          <div>
            <Image
              id="poster"
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt="poster"
            />
            <Card title="Genres" hoverable>
              {genres.length === 0 ? (
                <>N/A</>
              ) : (
                genres.map((genre) => (
                  <Paragraph>{String(genre.name)}</Paragraph>
                ))
              )}
            </Card>
            <Card title="Companies" hoverable>
              {companies.length === 0 ? (
                <>N/A</>
              ) : (
                companies.map((company) => (
                  <Paragraph>{String(company.name)}</Paragraph>
                ))
              )}
            </Card>
            <Card title="Countries" hoverable>
              {countries.length === 0 ? (
                <>N/A</>
              ) : (
                countries.map((country) => (
                  <Paragraph>{String(country.name)}</Paragraph>
                ))
              )}
            </Card>
          </div>
        </div>
      </motion.div>
    );

  return <Empty style={{ marginTop: "15px" }} />;
};

export default DiscoverInfo;
