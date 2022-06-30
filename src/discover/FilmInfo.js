import axios from "axios";
import APIKEY from "../config";
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
} from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const FilmInfo = () => {
  const { id, language } = useParams();
  const [isSuccessfulRequest, setSuccessfulRequest] = useState(false);
  const [film, setFilm] = useState([]);
  const [ellipsis, setEllipsis] = useState(true);
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
                  fontWeight: "lighter",
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
                fontSize: "18px",
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
          <Row>
            <Paragraph
              ellipsis={ellipsis}
              style={{
                fontSize: "22px",
              }}
            >
              {film.overview}
            </Paragraph>
          </Row>
          {/* more gui */}
        </Wrapper>
      </motion.div>
    );

  return <Empty />;
};

export default FilmInfo;
