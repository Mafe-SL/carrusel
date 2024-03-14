import React, { useRef, useEffect } from 'react';

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll('.slide');

    let currentSlide = 0;

    const goToSlide = (slideIndex) => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(currentSlide);
    };

    goToSlide(currentSlide);

    carousel.addEventListener('click', (event) => {
      if (event.target.matches('.prev')) {
        prevSlide();
      } else if (event.target.matches('.next')) {
        nextSlide();
      }
    });

    return () => {
      carousel.removeEventListener('click', (event) => {
        if (event.target.matches('.prev')) {
          prevSlide();
        } else if (event.target.matches('.next')) {
          nextSlide();
        }
      });
    };
  }, [images]);

  return (
    <div className="carousel" ref={carouselRef}>
      {images.map((image, index) => (
        <div className="slide" key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
      <button className="prev">Previous</button>
      <button className="next">Next</button>
    </div>
  );
};

export default Carousel;