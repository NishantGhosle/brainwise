import React from "react";
import "./style.css";
import footerReactangle from "../../images/footerReactangle.png";
import logo from "../../images/logo.svg";
import Box from "@mui/material/Box";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import linkedinIcon from "../../images/linkedinIcon.svg";
import instagramIcon from "../../images/instagramIcon.svg";

function Footer() {
  return (
    <>
      <Box className="blue-container d-flex">
        <Box className="left-blue">
          <Typography sx={{ ml: 5 }} style={{ color: "#fff", fontSize: 16 }}>
            GET INVOLVED
          </Typography>
          <Typography
            style={{ color: "#fff", fontSize: 36, fontWeight: "bold" }}
            sx={{ my: 1, ml: 5 }}
          >
            New Way to touch <br /> the Future
          </Typography>
          <Typography sx={{ ml: 5 }} style={{ color: "#fff", fontSize: 16 }}>
            The benefit you get by involving early
          </Typography>
        </Box>
        <FormControl>
          <Box display="flex" justifyContent="flex-end" sx={{ mt: 7, ml: 17 }}>
            <TextField
              type="text"
              name="name"
              placeholder="Enter your email"
              className="input-blue"
            />
            <Button
              style={{
                background: "linear-gradient(to right, #EB16F9, #7429DD)",
                borderRadius: 11,
                border: 0,
                color: "#ffffff",
                height: 55,
                padding: "0px 30px",
                fontSize: 16,
                left: -10,
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </FormControl>
      </Box>
      <Box className="footer">
        <Box
          component="img"
          sx={{
            position: "absolute",
            left: 0,
            top: 2800,
            // width: "100%",
            maxWidth: "100%",
            height: "auto",
            width: "100%",
            zIndex: -1,
          }}
          alt="Footer Rectangle"
          src={footerReactangle}
        />
        <Box className="combine d-flex">
          <Link to="/">
            <Box
              component="img"
              sx={{ height: 90, ml: 16, mt: 7, width: 60 }}
              alt="Logo"
              src={logo}
            />
          </Link>
          <Typography
            style={{ color: "#0b1460", fontSize: 36, fontWeight: "bold" }}
            sx={{ mt: 11, ml: 3, letterSpacing: 6 }}
          >
            BrainWise
          </Typography>
        </Box>
        <Box className="footer-list d-flex">
          <ul className="left-list">
            <li>11111 Lorem Ipsum Suite 101</li>
            <li>Arlington, Texas 12345</li>
            <li>P: (123) 123-1234</li>
            <li>support@brainwise.com</li>
          </ul>
          <Box className="right-footer d-flex">
            <Box className="companylink">
              <p className="ms-4">COMPANY</p>
              <ul>
                <li>About us</li>
                <li>Products</li>
              </ul>
            </Box>
            <Box className="ms-5">
              <p className="ms-4">FOLLOW US</p>
              <ul>
                <li>
                  <Box
                    component="img"
                    sx={{ mr: 2 }}
                    alt="Facebook Icon"
                    src={facebookIcon}
                  />
                  Facebook
                </li>
                <li>
                  <Box
                    component="img"
                    sx={{ mr: 0.8 }}
                    alt="Twitter Icon"
                    src={twitterIcon}
                  />
                  Twitter
                </li>
                <li>
                  <Box
                    component="img"
                    sx={{ mr: 1.2}}
                    alt="Linkedin Icon"
                    src={linkedinIcon}
                  />
                  Linkedin
                </li>
                <li>
                  <Box
                    component="img"
                    sx={{ mr: 1.8 }}
                    alt="Instagram Icon"
                    src={instagramIcon}
                  />
                  Instagram
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Typography
          style={{ color: "#0B1460", fontSize: 12.8 }}
          sx={{ mx: "auto", mt: 10, width: 300 }}
        >
          Copyright © 2022 BrainWise All rights reserved
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
