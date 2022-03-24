import '../assets/css/Carousel.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(2);
  const containerRef = useRef();

  const maxIndex = items.length - 1;

  useEffect(() => {
    const firstItem = activeIndex - 2 < 0 ? (activeIndex - 1 < 0 ? maxIndex - 1 : maxIndex) : activeIndex - 2;
    const secondItem = activeIndex - 1 < 0 ? maxIndex : activeIndex - 1;
    const fourthItem = activeIndex + 1 > maxIndex ? 0 : activeIndex + 1;
    const lastItem = activeIndex + 2 > maxIndex ? (activeIndex + 1 > maxIndex ? 1 : 0) : activeIndex + 2;
    console.log(firstItem, secondItem, activeIndex, fourthItem, lastItem);
    setVisibleItems([items[firstItem], items[secondItem], items[activeIndex], items[fourthItem], items[lastItem]])
  }, [activeIndex, maxIndex, items]);

  const renderItems = visibleItems.map((item, index) => {
    const { image, title, text, route, url } = item;
    const imageElement = <img src={`./img/${image}`} alt={title} className="carousel__item__image" />;
    const linkRoute = route && index === highlightIndex ? <Link to={route}>{imageElement}</Link> : null;
    const linkUrl = url && index === highlightIndex ? <a href={route}>{imageElement}</a> : null;

    return (
      <div
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

  function onLeft() {
    setHighlightIndex(4);
    const classList = containerRef.current.classList;
    classList.add('item-container--updated-left');
    setTimeout(() => {
      classList.remove('item-container--updated-left');
      setHighlightIndex(2);
      setActiveIndex(activeIndex - 1 < 0 ? maxIndex : activeIndex - 1);
    }, 500);
  }

  function onRight() {
    setHighlightIndex(0);
    const classList = containerRef.current.classList;
    classList.add('item-container--updated-right');
    setTimeout(() => {
      classList.remove('item-container--updated-right');
      setHighlightIndex(2);
      setActiveIndex(activeIndex + 1 > maxIndex ? 0 : activeIndex + 1);
    }, 500);
  }

  return (
    <div className="carousel">
      <img
        onClick={onLeft}
        className="button button__left"
        src="img/assets/button-left.png"
        alt="left button"
      />
      <div ref={containerRef} className="item-container">
        {renderItems}
      </div>
      <img
        onClick={onRight}
        className="button button__right"
        src="img/assets/button-right.png"
        alt="right button"
      />
    </div>
  );
}

export default Carousel;