import React, { useState, useEffect } from "react";
import start from "../images/fly.png";
import five from "../images/five.jpg";
import padel from "../images/padel.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: five,
      title: "Motivés, ensemble",
      text:
        "Sportner est une plateforme communautaire qui met en relation des amateurs de sport à travers le monde. Que vous cherchiez à courir, à nager ou à jouer au football, Sportner peut vous aider à trouver des partenaires d'entraînement adaptés à vos besoins et à vos intérêts."
    },
    {
      image: start,
      title: "Joie de partager",
      text:
        "Pratiquer une activité physique régulièrement peut avoir des bienfaits considérables pour la santé. En plus des avantages physiques, le sport peut également aider à réduire le stress et l'anxiété, ainsi qu'à améliorer l'estime de soi et l'humeur."
    },
    {
      image: padel,
      title: "Repousse tes limites",
      text: "Faire du sport avec d'autres personnes peut être une expérience très gratifiante. Partager une séance de sport avec des amis ou des membres de votre famille peut renforcer les liens entre vous et créer des souvenirs inoubliables."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img src={slides[currentSlide].image} className="w-full" />
        <div className="slide-title">
          <h1>{slides[currentSlide].title}</h1>
        </div>
        <div className="slide-text">
          <p>{slides[currentSlide].text}</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img
          src={slides[(currentSlide + 1) % slides.length].image}
          className="w-full"
        />
        <div className="slide-title">
          <h1>{slides[(currentSlide + 1) % slides.length].title}</h1>
        </div>
        <div className="slide-text">
          <p>{slides[(currentSlide + 1) % slides.length].text}</p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="image-overlay"></div>
        <img
          src={slides[(currentSlide + 2) % slides.length].image}
          className="w-full"
        />
        <div className="slide-title">
          <h1>{slides[(currentSlide + 2) % slides.length].title}</h1>
        </div>
        <div className="slide-text">
          <p>{slides[(currentSlide + 2) % slides.length].text}</p>
        </div>
      </div>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
