import '../assets/css/Section.css';
import React from 'react';
import Image from './Image';

function Section(props) {
  return (
    <section className={`section ${props.name}`}>
      <div className="container">
        {props.imgs.map((img) => {
          return (
            <Image
              animation={props.animation}
              src={`./img/assets/${img}.png`} 
              alt=""
              className={`${img}`}
            />
          )
        })}
        <div className="content">
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default Section;