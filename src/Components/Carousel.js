import '../assets/css/Carousel.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(2);
  const [displacement, setDisplacement] = useState(0);
  const containerRef = useRef();
  const imgRef = useRef();

  const maxIndex = items.length - 1;

  useEffect(() => {
    window.addEventListener('load', () => {
      setDisplacement(imgRef.current.clientWidth);
    });

    setDisplacement(imgRef.current.clientWidth);

    const firstItem = activeIndex - 2 < 0 ? (activeIndex - 1 < 0 ? maxIndex - 1 : maxIndex) : activeIndex - 2;
    const secondItem = activeIndex - 1 < 0 ? maxIndex : activeIndex - 1;
    const fourthItem = activeIndex + 1 > maxIndex ? 0 : activeIndex + 1;
    const lastItem = activeIndex + 2 > maxIndex ? (activeIndex + 1 > maxIndex ? 1 : 0) : activeIndex + 2;
    setVisibleItems([items[firstItem], items[secondItem], items[activeIndex], items[fourthItem], items[lastItem]])
  }, [activeIndex, maxIndex, items]);

  const renderItems = visibleItems.map((item, index) => {
    const { image, title, text, route, url } = item;
    const imageElement = <img src={`./img/${image}`} alt={title} className="carousel__item__image" />;
    const linkRoute = route && index === highlightIndex ? <Link to={route}>{imageElement}</Link> : null;
    const linkUrl = url && index === highlightIndex ? <a href={route}>{imageElement}</a> : null;

    return (
      <div
        ref={imgRef}
        key={index}
        className={`carousel__item ${index === highlightIndex ? 'carousel__item--active' : ''}`}>
        {linkRoute}
        {linkUrl}
        {!(index === highlightIndex) ? imageElement : null}
        <h3>
          {title}
        </h3>
        <p>
          {text}
        </p>
      </div>
    );
  });

  function onMove(direction) {
    document.body.style.setProperty('--displacement', `${direction === 'right' ? '-' : ''}${displacement + 25}px`);
    setHighlightIndex(null);
    const classList = containerRef.current.classList;
    classList.add(`item-container--updated-${direction}`);
    setTimeout(() => {
      classList.remove(`item-container--updated-${direction}`);
      setHighlightIndex(2);
      setActiveIndex(direction === 'left'
        ? activeIndex - 1 < 0 ? maxIndex : activeIndex - 1
        : activeIndex + 1 > maxIndex ? 0 : activeIndex + 1);
    }, 500);
  }

  return (
    <div className="carousel">
      <img
        onClick={() => onMove('left')}
        className="button button__left"
        src="img/assets/button-left.png"
        alt="left button"
      />
      <div ref={containerRef} className="item-container">
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