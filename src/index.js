/* IMPORT CSS */
import "./index.css";

import React from "react";
import ReactDom from "react-dom";

import Card from "./components/layout/Card";
import Header from "./components/layout/Header";
import ID from "./components/layout/ID";

ReactDom.render(
  <>
    <Header />
    <ID />
    <Card />
  </>,

  document.getElementById("root")
);
