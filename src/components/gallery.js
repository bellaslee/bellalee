import React, { useEffect, useState } from 'react';
import GalleryItem from './galleryItem';

export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Add your images here
  const images = [
    {
      id: 'yuta',
      mediaUrl: '../img/illustrations/yuta.png',
      title: 'Okkotsu Yuta',
      description: 'Jujutsu Kaisen fanart. March 2022.',
      width: 1888,
      height: 2607,
    },
    {
      id: 'aki',
      mediaUrl: '../img/illustrations/aki.jpg',
      title: 'Aki',
      description: 'Chainsaw Man fanart. April 2022.',
      width: 3882,
      height: 3543,
    },
    {
      id: 'dottore',
      mediaUrl: '../img/illustrations/dottore.jpg',
      title: 'Il Dottore',
      description: 'Genshin Impact fanart. July 2022.',
      width: 2093,
      height: 3243,
    },
    {
      id: 'jojoo',
      mediaUrl: '../img/illustrations/jojoo.jpg',
      title: 'Jotaro',
      description: 'Jojo\'s Bizarre Adventure fanart. April 2022.',
      width: 2872,
      height: 2426,
    },
    {
      id: '4taro',
      mediaUrl: '../img/illustrations/4taro.jpg',
      title: 'Jotaro',
      description: 'Jojo\'s Bizarre Adventure fanart. June 2022.',
      width: 3056,
      height: 3990,
    },
    {
      id: 'killerqueen',
      mediaUrl: '../img/illustrations/killerqueen.jpg',
      title: 'Yoshikage Kira',
      description: 'Jojo\'s Bizarre Adventure fanart. July 2022.',
      width: 2734,
      height: 3285,
    },
  ]

  // Settings
  const settings = {
    itemsPerRow: 4,
    imageMargin: 0,
    hoverOverlay: "ALL",
    imageWidth: 'auto',
    imageHeight: 500,
  }

  // TODO: responsive height? or make the number of items per row responsive.
  const createGallery = (items) => {
    const { itemsPerRow } = settings;

    let rowNum;
    if (items.length % itemsPerRow === 0) {
      rowNum = items.length / itemsPerRow
    } else {
      rowNum = Math.floor(items.length / itemsPerRow) + 1;
    }

    const rowItems = [];
    items = [].concat(...items);

    console.log(items, 'items');

    while (items.length) {
      rowItems.push(
        items.splice(0, itemsPerRow)
      );
    }

    const rows = [];

    for (let i = 0; i < rowNum; i++) {
      rows.push(createRow(rowItems[i]));
    }

    return rows;
  }

  function createRow(items) {
    const renderImages = items.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          src={item.mediaUrl}
          title={item.title}
          description={item.description}
          margin={settings.imageMargin}
          overlay={settings.hoverOverlay}
          fullWidth={item.width}
          fullHeight={item.height}
          width={settings.imageWidth}
          height={settings.imageHeight} />
      )
    })

    return (
      <div className="column">
        {renderImages}
      </div>
    )
  }

  const rows = createGallery(images);
  const renderGallery = rows.map((row) => {
    return row;
  })


  return (
    <div className="gallery">
      {renderGallery}
    </div>
  )
}
