import '../assets/css/Article.css'
import React, { useEffect } from 'react';
import Nav from './Nav';
import BackButton from './BackButton';
import { Outlet } from 'react-router-dom';

function Article() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <React.Fragment>
      <Outlet />
      <Nav currentPage="Article" />
      <BackButton />
    </React.Fragment>
  );
}

export default Article;