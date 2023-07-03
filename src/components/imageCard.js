import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <Link href={item.route}><a><img ref={imageRef} alt={item.text} src={`../img/${item.image}`} /></a></Link>
    </div>
  )
}

export default ImageCard;