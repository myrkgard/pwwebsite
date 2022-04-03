import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Home from "./routes/Home";
import Articles from "./routes/Articles";
import About from "./routes/About";
import Legal from "./routes/Legal";
import Nothing from "./routes/Nothing";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import AllArticles from "./AllArticles";
// import Article from "./Article";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/articles" element={<Articles />}>
          <Route index element={<AllArticles />} />
          <Route path=":articleId" element={<Article />} />
        </Route> */}
        {/* Intermediate placeholder for proper route Articles*/}
        <Route path="/articles" element={<Articles />} />
        {/* Good from here on */}
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<Nothing />} />
      </Routes>
      <hr className="footer-divider" />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
