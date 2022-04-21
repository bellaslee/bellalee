import { render } from 'react-dom';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Article from './Components/Article';
import PersonalWebsite from './routes/PersonalWebsite';
import Thoma from './routes/Thoma';
import Aki from './routes/Aki';
import Yuta from './routes/Yuta';
import ChildeDelusion from './routes/ChildeDelusion';
import ChildeSnow from './routes/ChildeSnow';
import Jojo from './routes/Jojo';
import Portfolio from './Portfolio';

const rootElement = document.getElementById('root');

render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Article />}>
        <Route path="/projects/personal-website" element={<PersonalWebsite />} />
      </Route>
      <Route path="/illustrations" element={<Article />}>
        <Route path="/illustrations/aki" element={<Aki />} />
        <Route path="/illustrations/yuta" element={<Yuta />} />
        <Route path="/illustrations/thoma" element={<Thoma />} />
        <Route path="/illustrations/childe-delusion" element={<ChildeDelusion />} />
        <Route path="/illustrations/childe-snow" element={<ChildeSnow />} />
        <Route path="/illustrations/jojo" element={<Jojo />} />
      </Route>
      <Route path="/portfolio" element={<Portfolio />}>

      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);