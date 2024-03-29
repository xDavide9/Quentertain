import styles from "./Home.module.css";
import {Button, notification, Select, Typography} from "antd";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import tmdbLogo from "./tmdblogo.svg";
import appLogo from "./applogo.svg";
import {pageTransition} from "../common/animations";
import {useEffect} from "react";
import {Helmet} from "react-helmet";

const {Title, Paragraph} = Typography;
const {Option} = Select;

const Home = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        notification.warn({
            title: "Privacy Policy",
            message:
                "This application does NOT collect any form of personal information from its users.",
            placement: "bottomRight",
        });
    }, []);

    return (
        <motion.div className={styles.topLevelContainer} {...pageTransition}>
            <Helmet>
                <title>Information About Movies!</title>
                <meta name="description" content="Quentertain shows any type of information related to your favourite movies.
                These include release-date, genre, brief description, cover and more... there are multiple ways to find results
                making it convenient for everyone's needs." />
            </Helmet>
            <div className={`${styles.container} ${styles.gap}`}>
                <img src={appLogo} alt="app logo" className={styles.appLogo}/>
                <div className={styles.appearOnTablet}>
                    <Paragraph className={styles.fontSmall}>Powered by</Paragraph>
                    <img src={tmdbLogo} alt="tmdb logo" className={styles.tmdbLogo}/>
                </div>
            </div>

            <div className={styles.container}>
                <ul>
                    <li>
                        <Title level={3}>Language</Title>
                        <Paragraph className={styles.fontMedium}>
                            Select a language
                        </Paragraph>
                        <Select
                            defaultValue={props.defaultLanguage}
                            onChange={(language) => props.setLanguage(language)}
                        >
                            <Option value="en">English</Option>
                            <Option value="it">Italian</Option>
                            <Option value="de">German</Option>
                            <Option value="es">Spanish</Option>
                            <Option value="fr">French</Option>
                        </Select>
                    </li>
                    <li>
                        <Title level={3}>Discover</Title>
                        <Paragraph className={styles.fontMedium}>
                            Discover new movies
                        </Paragraph>
                        <Button type="primary" onClick={() => navigate("/discover")}>
                            Discover Now
                        </Button>
                    </li>
                    <li>
                        <Title level={3}>Search</Title>
                        <Paragraph className={styles.fontMedium}>
                            Search a specific movie
                        </Paragraph>
                        <Button type="primary" onClick={() => navigate("/search")}>
                            Search Now
                        </Button>
                    </li>
                </ul>
                <div className={styles.disappearOnTablet}>
                    <Paragraph className={styles.fontSmall}>Powered by</Paragraph>
                    <img src={tmdbLogo} alt="tmdb logo" className={styles.tmdbLogo}/>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
