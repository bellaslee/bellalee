import '../assets/css/Article.css'
import React, { useEffect } from 'react';
import Nav from './Nav';
import BackButton from './BackButton';
import { Outlet } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

function Article() {
  useEffect(() => {
    const getScroll = () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', getScroll, false);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, []);

  return (
    <React.Fragment>
      <Outlet />
      <Nav currentPage="Article" />
      <BackButton />
      <ScrollIndicator />
    </React.Fragment>
  );
}

export default Article;