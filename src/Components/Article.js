import '../assets/css/Article.css'
import React from 'react';
import Nav from './Nav';
import BackButton from './BackButton';
import { Outlet } from 'react-router-dom';

function Article() {
  return (
    <React.Fragment>
      <Outlet />
      <BackButton />
      <Nav currentPage="Article" />
    </React.Fragment>
  );
}

export default Article;