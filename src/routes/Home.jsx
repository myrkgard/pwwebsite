import React from "react";
import { useNavigate } from "react-router-dom";
import ant from "../assets/ant.png";
import "./Home.scss";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="ant-container">
        <div className="ant-text">
          <h1>Building systems for resilient societies.</h1>

          <button
            className="oval-btn"
            type="button"
            onClick={() => {
              navigate("/articles");
            }}
          >
            Read articles
          </button>
        </div>
        <div className="ant-image">
          <img className="the-ant-image" src={ant} />
        </div>
      </div>
    </div>
  );
}
