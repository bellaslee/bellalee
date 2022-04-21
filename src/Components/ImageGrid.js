import React from 'react';
import ImageCard from './ImageCard';

function ImageGrid({ items }) {
  const renderItems = items.map((item, index) => {
    return (
      <ImageCard
        key={index}
        className={`image-grid__item`}
        item={item}
      />
    );
  });


  return (
    <div className="image-grid">
    </div>
  );
}

export default ImageGrid;