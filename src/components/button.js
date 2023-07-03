import '../assets/css/Button.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ content, link, route }) {
  const button = <button className="button">{content}</button>;
  const target = route ? <Link to={route}>{button}</Link> : <a href={link}>{button}</a>;
  return (
    <React.Fragment>
      {target}
    </React.Fragment>
  )
}

export default Button;