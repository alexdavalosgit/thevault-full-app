import React from "react";
import Slider from "react-slick";
import { Image, Row, Col } from "react-bootstrap";
import Doodle from "../../images/doodles.avif";
import Azuki from "../../images/azuki.avif";
import Bayc from "../../images/bayc.avif";

export default function ImageSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="d-flex justify-content-center">
        <Image src={Doodle} style={{ maxHeight: "400px" }}></Image>
      </div>
      <div className="d-flex justify-content-center">
        <Image src={Azuki} style={{ maxHeight: "400px" }}></Image>
      </div>
      <div className="d-flex justify-content-center">
        <Image src={Bayc} style={{ maxHeight: "400px" }}></Image>
      </div>
    </Slider>
  );
}
