import { render } from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Home from './home';
import About from './about';
import Article from './Components/Article';
import WithFriends from './routes/WithFriends';
import PersonalWebsite from './routes/PersonalWebsite';
import Thoma from './routes/Thoma';
import Aki from './routes/Aki';
import Yuta from './routes/Yuta';
import ChildeDelusion from './routes/ChildeDelusion';
import ChildeSnow from './routes/ChildeSnow';

const rootElement = document.getElementById('root');

render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Article />}>
        <Route path="/projects/with-friends" element={<WithFriends />} />
        <Route path="/projects/personal-website" element={<PersonalWebsite />} />
      </Route>
      <Route path="/illustrations" element={<Article />}>
        <Route path="/illustrations/aki" element={<Aki />} />
        <Route path="/illustrations/yuta" element={<Yuta />} />
        <Route path="/illustrations/thoma" element={<Thoma />} />
        <Route path="/illustrations/childe-delusion" element={<ChildeDelusion />} />
        <Route path="/illustrations/childe-snow" element={<ChildeSnow />} />
      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);