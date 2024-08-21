"use client"

import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

// Data for carousel slides
const images = [
  {
    src: "../Carousel/Carousel.svg",
    text1: "Receive guaranteed",
    buttonText: "GIFT VOUCHER",
    text2: "on a monthly hire or lease",
    link: "https://example.com/"
  },
  {
    src: "../Carousel/Carousel.svg",
    text1: "Another promotion",
    buttonText: "CLAIM NOW",
    text2: "Limited time offer",
    link: "https://example.com/"
  },
  {
    src: "../Carousel/Carousel.svg",
    text1: "Special offer",
    buttonText: "GET STARTED",
    text2: "Sign up today",
    link: "https://example.com/"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  const showSlide = (index: number) => {
    const carouselImages = document.querySelector(`.${styles.carouselImages}`) as HTMLElement;
    const text1 = document.getElementById('carousel-text1') as HTMLParagraphElement;
    const button = document.getElementById('carousel-button') as HTMLButtonElement;
    const text2 = document.getElementById('carousel-text2') as HTMLParagraphElement;

    // Update image and transform
    if (carouselImages) {
      carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }

    // Update text content and button
    if (text1 && button && text2) {
      text1.textContent = images[index].text1;
      button.textContent = images[index].buttonText;
      text2.textContent = images[index].text2;
      button.onclick = () => window.location.href = images[index].link;
    }

    // Update active dot
    document.querySelectorAll(`.${styles.dot}`).forEach((dot, i) => {
      dot.classList.toggle(styles.active, i === index);
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselImages}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Slide ${index}`} />
          ))}
        </div>

        <div className={styles.carouselText}>
          <div className={styles.carouselTextHeader}>
            <p className={styles.text1} id="carousel-text1"></p>
            <button className={styles.carouselButton} id="carousel-button"></button>
          </div>
          <div className={styles.carouselTextParagraph}>
            <p className={styles.text2} id="carousel-text2"></p>
          </div>
        </div>

        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
