import React, { useRef } from 'react';
import Link from 'next/link';

function CarouselItem({ onImageRender, className, item }) {
  const ref = useRef();

  const { image, title, text, route, url } = item;
  const imageElement = <img src={`./img/${image}`} alt={title} className="carousel__item__image" />;
  const linkRoute = route ? <Link href={route}><a>{imageElement}</a></Link> : null;
  const linkUrl = url ? <a href={route}>{imageElement}</a> : null;

  return (
    <div
      onLoad={() => {
        onImageRender(ref.current.clientWidth);
      }}
      ref={ref}
      className={className}>
      {linkRoute}
      {linkUrl}
      {!route && !url ? imageElement : null}
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  )
}

export default CarouselItem;