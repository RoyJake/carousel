"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "./page.css";

// import Image1 from "../public/images/image1.jpg";
// import Image2 from "../public/images/image2.jpg";
import Image3 from "../public/images/image3.jpg";
import Image4 from "../public/images/image4.jpg";
import Image5 from "../public/images/image5.jpg";
import Image6 from "../public/images/image6.jpg";
import Image7 from "../public/images/image7.jpg";
// import Image8 from "../public/images/image8.jpg";
import Image9 from "../public/images/image9.jpg";
import Image10 from "../public/images/image10.jpg";
// import Image11 from "../public/images/image11.jpg";
import Image12 from "../public/images/image12.jpg";
import Image13 from "../public/images/image13.jpg";

const imageArray = [
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image9,
  Image10,
  Image12,
  Image13,
];

const CarouselPage = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {imageArray.map((image, index) => (
          <div key={index} className="item">
            <Image key={index} src={image} alt={`${index}`} className="image" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselPage;
