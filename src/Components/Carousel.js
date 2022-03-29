import '../assets/css/Carousel.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselItem from './Carouseltem';

function Carousel({ items }) {
  const [totalWidth, setTotalWidth] = useState(0);
  // const [displacement, setDisplacement] = useState(248);
  // const containerRef = useRef();
  // const imgRef = useRef();

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (items.length > 2) {
      items.splice(0, 0, items[lastIndex]);
      items.splice(lastIndex + 2, 0, items[1]);
    }
    console.log(items);
  }, [items]);

  const getWidth = (width) => {
    setTotalWidth(totalWidth + width + 12);
    console.log('total width', totalWidth);
    document.body.style.setProperty('--totalWidth', `${totalWidth}px`);
  };

  const getOffset = (offset) => {
    console.log(offset);
    document.querySelector('.item-container').scrollLeft = offset;
    console.log('item container', document.querySelector('.item-container'));
    console.log('page x offset', document.querySelector('.item-container').pageXOffset)
  };

  const renderItems = items.map((item, index) => {
    return (
      <CarouselItem
        index={index}
        className={`carousel__item`}
        item={item}
        onImageRender={getWidth}
        returnOffset={getOffset} />
    );
  });

  function onMove(direction) {

  }

  return (
    <div className="carousel">
      <img
        onClick={onMove('left')}
        className="button button__left"
        src="img/assets/button-left.png"
        alt="left button"
      />
      <div className="item-container">
        {renderItems}
      </div>
      <img
        onClick={onMove('right')}
        className="button button__right"
        src="img/assets/button-right.png"
        alt="right button"
      />
    </div>
  );
}

export default Carousel;