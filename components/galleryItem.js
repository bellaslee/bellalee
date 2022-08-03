import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import imageLoader from './loader';

export default function GalleryItem({ margin, title, description, overlay, src, key, fullWidth, fullHeight, width, height }) {

  const popupRef = useRef();
  const overlayRef = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const imageRatio = fullWidth / fullHeight;
  let displayHeight = windowHeight * 0.8;
  let displayWidth = displayHeight * imageRatio;

  if (displayWidth >= windowWidth) {
    displayWidth = windowWidth * 0.95;
    displayHeight = displayWidth / imageRatio;
  }

  if (width === 'auto') {
    width = height * imageRatio;
  }

  function hideOverlay() {
    overlayRef.current.style.display = 'none';
  }

  function showOverlay() {
    overlayRef.current.style.display = 'flex';
  }

  function generateOverlay() {
    if (overlay === "NONE") {
      return;
    } else {
      return (
        <div className="overlay" ref={overlayRef} onClick={hideOverlay}>
          <h4>{overlay === "TITLE" || overlay === "ALL" ? title : ''}</h4>
          <p>
            {overlay === "DESCRIPTION" || overlay === "ALL" ? description : ''}
          </p>
        </div>
      )
    }
  }

  function showPopup() {
    popupRef.current.style.display = 'block';
    document.body.classList.add('stop-scrolling')
  }

  function hidePopup() {
    popupRef.current.style.display = 'none';
    document.body.classList.remove('stop-scrolling')
  }

  let popupMarginLeft = `-${displayWidth / 2}px`;
  let popupMarginTop = `-${displayHeight / 2}px`;

  return (
    <>
      <div
        className="popup"
        ref={popupRef}
        style={{
          marginLeft: popupMarginLeft,
          marginTop: popupMarginTop
        }} >
        <div onClick={hidePopup}>x</div>
        <Image
          src={src}
          width={displayWidth}
          height={displayHeight}
          objectFit="cover"
          alt={key}
          loader={imageLoader}
        />
      </div>
      <div
        className="gallery-item"
        style={{ margin: `${margin}px` }}
        onClick={showPopup}
        onMouseEnter={showOverlay}
        onMouseLeave={hideOverlay}>
        {generateOverlay()}
        <Image
          src={src}
          width={width}
          height={height}
          objectFit="cover"
          alt={key}
          loader={imageLoader} />
      </div>
    </>
  )
}