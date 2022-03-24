import '../assets/css/Article.css'
import React from 'react';
import Section from './Section';
import Nav from './Nav';

function Article() {
  return (
    <React.Fragment>
      <Section name="under-construction">
        <h2>Coming soon!</h2>
      </Section>
      <Nav currentPage="Article" />
    </React.Fragment>
  );
}

export default Article;