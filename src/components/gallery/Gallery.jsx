import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; // Custom styles

import img1 from "../../assets/kidsGrp.avif";
import img2 from "../../assets/kidGrp1.avif";
import img3 from "../../assets/kidsGrp3.avif";
import img4 from "../../assets/kidsGrp4.avif";
import img5 from "../../assets/kidsGrp5.avif";
import img6 from "../../assets/kidsGrp6.avif";
import img7 from "../../assets/kidsGrp8.avif";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="moments-section">
      <Typography variant="h3" className="gallery-title">Our Moments</Typography>
      <Box className="gallery-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <Box key={index} className="gallery-slide">
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Gallery;
