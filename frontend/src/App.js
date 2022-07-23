import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./miscellaneous/ErrorPage";
import Home from "./home/Home";
import CustomLayout from "./miscellaneous/CustomLayout";
import DiscoverButtons from "./discover/DiscoverButtons";
import DiscoverInfo from "./discover/DiscoverInfo";

// https://www.themoviedb.org/documentation/api/discover

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <CustomLayout navigate={navigate} location={location}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<DiscoverButtons />} />
          <Route
            exact
            path="/discover/:id/:language"
            element={<DiscoverInfo />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </CustomLayout>
  );
};

export default App;
