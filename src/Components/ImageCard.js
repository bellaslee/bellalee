import React, { useState, useRef, useEffect } from 'react';

function ImageCard({ item }) {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', calculateSpans);
  }, [])

  function calculateSpans() {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }

  const { description, urls } = 'cool'; // what is this lol

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  )
}

export default ImageCard;