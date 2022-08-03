import React, { useEffect, useState } from 'react';
import CarouselItem from './carouselItem';

function Carousel({ items }) {
  const [totalWidth, setTotalWidth] = useState(0);
  let scrollButtonStatus = true;

  useEffect(() => {
    if (totalWidth < window.innerWidth) scrollButtonStatus = false;
    else scrollButtonStatus = true;
  }, [])

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
    let scrollAmount = window.innerWidth;
    if (totalWidth > window.innerWidth) {
      if (direction === 'left') {
        document.querySelector('.item-container').scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        document.querySelector('.item-container').scrollLeft += scrollAmount;
      }
    }
  }

  return (
    <div className="carousel">
      <img
        onClick={() => onMove('left')}
        className={`scroll-button scroll-button__left ${scrollButtonStatus ? '' : 'scroll-button--hidden'}`}
        src="../img/assets/button-left.png"
        alt="left button"
      />
      <div className="item-container">
        {renderItems}
      </div>
      <img
        onClick={() => onMove('right')}
        className={`scroll-button scroll-button__right ${scrollButtonStatus ? '' : 'scroll-button--hidden'}`}
        src="../img/assets/button-right.png"
        alt="right button"
      />
    </div>
  );
}

export default Carousel;