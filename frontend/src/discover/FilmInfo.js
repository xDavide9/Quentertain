import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "../util/Wrapper";
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
} from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Item } = Descriptions;

const FilmInfo = () => {
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
      url: "http://localhost:8080/api/v1/filminfo",
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
        console.log(err);
        setSuccessfulRequest(false);
      });
  }, [id, language]);

  if (isSuccessfulRequest)
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
        <Wrapper>
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Title
                style={{
                  fontSize: "50px",
                  paddingTop: "15px",
                  fontWeight: "normal",
                  margin: "0",
                }}
                copyable
              >
                {film.title}{" "}
              </Title>
            </Col>
          </Row>

          <Row>
            <Col
              span={24}
              style={{
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              {film.tagline === "" ? (
                <></>
              ) : (
                <div style={{ paddingTop: "10px" }}>{film.tagline}</div>
              )}
            </Col>
          </Row>

          <Divider orientation="left">
            {ellipsis ? (
              // fake link just to get the styling
              <Typography.Link
                onClick={() => setEllipsis(!ellipsis)}
                style={{ fontWeight: "normal", userSelect: "none" }}
              >
                <Space>
                  Show More <ArrowsAltOutlined />
                </Space>
              </Typography.Link>
            ) : (
              <Typography.Link
                onClick={() => setEllipsis(!ellipsis)}
                style={{ fontWeight: "normal", userSelect: "none" }}
              >
                <Space>
                  Show Less <ShrinkOutlined />
                </Space>
              </Typography.Link>
            )}
          </Divider>

          <Row style={{ paddingBottom: "10px" }}>
            <Paragraph ellipsis={ellipsis} style={{ fontSize: "20px" }}>
              {film.overview}
            </Paragraph>
            {ellipsis === true ? (
              <></>
            ) : (
              <Col span={24}>
                <Descriptions
                  layout="vertical"
                  bordered
                  contentStyle={{ fontSize: "17px" }}
                  labelStyle={{ fontSize: "18px" }}
                  style={{ paddingBottom: " 20px" }}
                >
                  <Item label="Home Page" span>
                    {film.homepage === "" ? (
                      "N/A"
                    ) : (
                      <Typography.Link href={`${film.homepage}`}>
                        {film.homepage}
                      </Typography.Link>
                    )}
                  </Item>
                  <Item label="Release Date">
                    <Tooltip color="blue" title="yyyy-mm-dd">
                      {film.release_date === "" ? "N/A" : film.release_date}
                    </Tooltip>
                  </Item>
                  <Item label="IMDB id">
                    <Tooltip
                      color="blue"
                      title="International Movie Database id"
                    >
                      {film.imdb_id === "" ? "N/A" : film.imdb_id}
                    </Tooltip>
                  </Item>
                  <Item label="Original Language">
                    {film.original_language === ""
                      ? "N/A"
                      : film.original_language}
                  </Item>
                  <Item label="Original Title">
                    {film.original_title === "" ? "N/A" : film.original_title}
                  </Item>
                  <Item label="Vote Average">
                    {film.vote_average === "" ? "N/A" : film.vote_average}
                  </Item>
                  <Item label="Vote Count">
                    {film.vote_count === "" ? "N/A" : film.vote_count}
                  </Item>
                  <Item label="Adult Film">
                    {film.adult === "" ? "N/A" : film.adult ? "Yes" : "No"}
                  </Item>
                </Descriptions>
              </Col>
            )}
          </Row>

          <Row gutter={22}>
            <Col span={6} style={{ textAlign: "center" }}>
              <Title style={{ fontWeight: "normal" }}>Popularity</Title>
              <Progress
                type="circle"
                width={150}
                percent={film.popularity}
                format={() => film.popularity.toFixed(2)}
              />
            </Col>
            <Col span={6} style={{ textAlign: "center" }}>
              <Title style={{ fontWeight: "normal" }}>Runtime</Title>
              <Progress
                type="circle"
                width={150}
                percent={film.runtime / 2}
                format={() =>
                  `${~~(film.runtime / 60)} h ${film.runtime % 60} m`
                }
              />
            </Col>
            <Col span={6} style={{ textAlign: "center" }}>
              <Title style={{ fontWeight: "normal" }}>Revenue</Title>
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
            </Col>
            <Col span={6} style={{ textAlign: "center" }}>
              <Title style={{ fontWeight: "normal" }}>Budget</Title>
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
            </Col>
          </Row>

          <Row gutter={100} style={{ paddingTop: "30px" }}>
            <Col span={8}>
              <Card
                title="Genres"
                hoverable
                headStyle={{ fontSize: "20px" }}
                bodyStyle={{ fontSize: "16px" }}
              >
                {genres.length === 0 ? (
                  <>N/A</>
                ) : (
                  genres.map((genre) => <p>{String(genre.name)}</p>)
                )}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Companies"
                hoverable
                headStyle={{ fontSize: "20p" }}
                bodyStyle={{ fontSize: "16px" }}
              >
                {companies.length === 0 ? (
                  <>N/A</>
                ) : (
                  companies.map((company) => <p>{String(company.name)}</p>)
                )}
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Countries"
                hoverable
                headStyle={{ fontSize: "20p" }}
                bodyStyle={{ fontSize: "16px" }}
              >
                {countries.length === 0 ? (
                  <>N/A</>
                ) : (
                  countries.map((country) => <p>{String(country.name)}</p>)
                )}
              </Card>
            </Col>
          </Row>

          <Divider>Gallery</Divider>

          <Row style={{ paddingBottom: "30px" }}>
            <Col
              span={12}
              style={{ textAlign: "center", verticalAlign: "center" }}
            >
              <Image
                width={300}
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt="poster"
              />
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              <Image
                width={300}
                src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                alt="backdrop"
              />
            </Col>
          </Row>
        </Wrapper>
      </motion.div>
    );

  return <Empty style={{ paddingTop: "15px" }} />;
};

export default FilmInfo;
