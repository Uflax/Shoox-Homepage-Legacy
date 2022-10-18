import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Unique

import Main from "./main/Main";
import News from "./main/news/News";
import Social from "./main/social/Social";

//Basic

import Header from "./main/header/Header";
import Footer from "./main/footer/Footer";

//Utils

import {generateUUID} from "../utils/generateUUID";

function App() {
  return (
      <BrowserRouter>
          <Header key={generateUUID()}/>
          <div id="Content">
          <Routes>
                <Route path="/" element={<Main key={generateUUID()}/>} />
                <Route path="/news" element={<News key={generateUUID()}/>} />
                <Route path="/social" element={<Social key={generateUUID()}/>} />
          </Routes>
          </div>
          <Footer key={generateUUID()}/>
      </BrowserRouter>
  );
}

export default App;
