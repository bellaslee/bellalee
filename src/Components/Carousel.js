import '../assets/css/Carousel.css';
import React, { useState } from 'react';
import CarouselItem from './Carouseltem';

function Carousel({ items }) {
  const [totalWidth, setTotalWidth] = useState(0);

  const getWidths = (width) => {
    setTotalWidth(totalWidth + width);
    document.body.style.setProperty('--totalWidth', `${totalWidth}px`);
  };

  const renderItems = items.map((item, index) => {
    return (
      <CarouselItem
        key={index}
        className={`carousel__item`}
        item={item}
        onImageRender={getWidths}
      />
    );
  });

  function onMove(direction) {
    if (totalWidth > window.innerWidth) {
      if (direction === 'left') {
        document.querySelector('.item-container').scrollLeft -= 400;
      } else if (direction === 'right') {
        document.querySelector('.item-container').scrollLeft += 400;
      }
    }
  }

  return (
    <div className="carousel">
      <img
        onClick={() => onMove('left')}
        className="button button__left"
        src="img/assets/button-left.png"
        alt="left button"
      />
      <div className="item-container">
        {renderItems}
      </div>
      <img
        onClick={() => onMove('right')}
        className="button button__right"
        src="img/assets/button-right.png"
        alt="right button"
      />
    </div>
  );
}

export default Carousel;