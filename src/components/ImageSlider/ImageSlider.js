import React from "react";
import Slider from "react-slick";
import { Container, Image } from "react-bootstrap";
import "./ImageSlider.css";
import Doodle from "../../images/doodles.avif";
import Azuki from "../../images/azuki.avif";
import Bayc from "../../images/bayc.avif";

export default function ImageSlider() {
  const images = [{ src: Doodle }, { src: Azuki }, { src: Bayc }];

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
  };

  return (
    <Container fluid className="slider-container">
      <Slider {...settings} className="slider">
        {images.map((image) => (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={image.src}
              alt="your-description"
              style={{ maxWidth: "30%", height: "auto" }}
            />
            <h2>doodles</h2>
            <p>
              Note: Not representative of what's in the smart contract. But
              anything is possible?
            </p>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
