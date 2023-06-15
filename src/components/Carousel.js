import React, { useState } from 'react';

import start from '../images/fly.png'
import racket from '../images/racket.png'
import test from "../images/testi.jpg"

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [test]

  const images2 = [start]

  const images3 = [racket]

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img src={images[currentImage]} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a></a>
          <a href="#slide2" onClick={nextImage} className="btn btn-circle">❯</a>
        </div>
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3>Slide 1</h3>
          <p>Description de la slide 1</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img src={images2[(currentImage + 1) % images.length]} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" onClick={previousImage} className="btn btn-circle">❮</a>
          <a href="#slide3" onClick={nextImage} className="btn btn-circle">❯</a>
        </div>
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3>Slide 2</h3>
          <p>Description de la slide 2</p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img src={images3[(currentImage + 2) % images.length]} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" onClick={previousImage} className="btn btn-circle">❮</a>
        </div>
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3>Slide 3</h3>
          <p>Description de la slide 3</p>
        </div>
      </div>
    </div>
  );
};


export default Carousel;
