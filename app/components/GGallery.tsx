import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Importe o estilo CSS (você pode precisar ajustar o caminho)

const images = [
  {
    original: "/gallery/1.jpg",
    thumbnail: "/gallery/1.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 160,
  },
  {
    original: "/gallery/2.jpg",
    thumbnail: "/gallery/2.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/3.jpg",
    thumbnail: "/gallery/3.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/4.jpg",
    thumbnail: "/gallery/4.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/5.jpg",
    thumbnail: "/gallery/5.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/6.jpg",
    thumbnail: "/gallery/6.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/7.jpg",
    thumbnail: "/gallery/7.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/8.jpg",
    thumbnail: "/gallery/8.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/9.jpg",
    thumbnail: "/gallery/9.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/10.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/11.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/12.jpg",
    thumbnail: "/gallery/12.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/13.jpg",
    thumbnail: "/gallery/13.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/14.jpg",
    thumbnail: "/gallery/14.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/15.jpg",
    thumbnail: "/gallery/15.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },
  {
    original: "/gallery/16.jpg",
    thumbnail: "/gallery/16.jpg",
    thumbnailWidth: 100,
    thumbnailHeight: 60,
  },


];


export class GGallery extends React.Component {
  render() {
    return (
      <div className="flex justify-center bg-black ">
        <div className="w-9/12">
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }
}