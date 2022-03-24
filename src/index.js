import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Home from './home';
import About from './about';
import Article from './Components/Article';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/with-friends" element={<Article />} />
      <Route path="/personal-website" element={<Article />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);