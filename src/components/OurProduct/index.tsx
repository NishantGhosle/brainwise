import React, { useState } from "react";
import "./style.css";
import oval2 from "../../images/oval2.png";
import customer2 from "../../images/customer2.png";
import customer3 from "../../images/customer3.png";
import customer4 from "../../images/customer4.png";
import customer5 from "../../images/customer5.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import { dataSlider } from "./data";

// const images = [customer2, customer3, customer4, customer5];
interface IOurProduct {
  src?: string;
  onClick?: any;
  current?: any;
  dots?: any;
  title?: string;
  description?: string;
}

function OurProduct({ src }: IOurProduct) {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setSlideIndex(next),
    centerMode: true,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <Box className="container">
        <Box
          component="img"
          sx={{
            width: "50%",
            position: "absolute",
            left: 330,
            top: 1100,
            zIndex: -1,
          }}
          alt="Oval"
          src={oval2}
        />
        <Box
          component="img"
          sx={{
            width: "70%",
            position: "absolute",
            left: 200,
            top: 970,
            zIndex: -1,
          }}
          alt="Oval"
          src={oval2}
        />
        <Box className="product-content">
          <Typography
            style={{ color: "#7429dd", fontSize: 12.8, fontWeight: "bold" }}
            sx={{ mx: "auto", width: 297 }}
          >
            HOW IT WORKS
          </Typography>
          <Typography
            style={{ color: "#0b1460", fontSize: 36, fontWeight: "bold" }}
            sx={{ mx: "auto", width: 297 }}
          >
            OUR PRODUCTS
          </Typography>
          <Box className="box mt-5">
            <div className="container">
              <div className="slider">
                <Slider {...settings}>
                  {dataSlider.map((item, index) => (
                    <div
                      className={
                        index === slideIndex ? "slide slide-active" : "slide"
                        // index === slideIndex ? "slide slide-active" : "slide"
                      }
                      key={index}
                    >
                      {/* <img src={item.img} alt="" /> */}
                      <div className="card">
                        <div className="card-top">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OurProduct;
