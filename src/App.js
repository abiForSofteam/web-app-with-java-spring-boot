// import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import InformationsTechniques from "./InformationsTechniques";
import Certifications from "./Certifications";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/informations-techniques"
          element={<InformationsTechniques />}
        />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
