import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import headerShowcase from "../../images/headerShowcase.png";
import headerRectangle from "../../images/headerRectangle.png";
import Second from "../Second";
import OurProduct from "../OurProduct";
import ContactUs from "../ContactUs";
import OurCustomers from "../OurCustomers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          to="/"
          style={{
            color: "#0b1460",
            textDecoration: "none",
            fontSize: 12.8,
            fontWeight: "bold",
          }}
        >
          <Box
            component="img"
            sx={{ height: 54, mr: 23, mt: 4, mb: 1, width: 65 }}
            alt="Logo"
            src={logo}
          />
          <br />
          BrainWise
        </Link>
        <Box
          style={{ color: "#0b1460", fontSize: 12.8 }}
          sx={{ display: "flex", mr: 5, justifyContent: "space-end" }}
        >
          <Box sx={{ mx: 2, mt: 5 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#0B1460",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Home
            </Link>
          </Box>
          <Box sx={{ mx: 2, mt: 5 }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#0B1460",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              About Us
            </Link>
          </Box>
          <Box sx={{ mx: 2, mt: 5 }}>
            <Link
              to="/product"
              style={{
                textDecoration: "none",
                color: "#0B1460",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Products
            </Link>
          </Box>
          <Box sx={{ mx: 2, mt: 5 }}>
            <Link
              to="/customer"
              style={{
                textDecoration: "none",
                color: "#0B1460",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Customer
            </Link>
          </Box>
          <Box sx={{ mx: 2, mt: 5 }}>
            <Link
              to="/customer"
              style={{
                textDecoration: "none",
                color: "#0B1460",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Contact Us
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ ml: 16, mt: 9 }}>
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "95%",
              maxHeight: 650,
              maxWidth: "100%",
              position: "absolute",
              left: 60,
              top: 0,
              zIndex: -1,
            }}
            alt="Header Rectangle"
            src={headerRectangle}
          />
          <Typography
            style={{ color: "#0b1460", fontSize: 54, lineHeight: 1.1 }}
            sx={{ mt: 4 }}
          >
            How Artificial
            <br /> Intelligence Will <br /> Change Our Life
          </Typography>
          <Typography style={{ color: "#0b1460", fontSize: 16 }} sx={{ my: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ipsam, sed hic.
          </Typography>
          <Button
            style={{
              background: "linear-gradient(to right, #EB16F9, #7429DD)",
              borderRadius: 11,
              border: 0,
              color: "white",
              height: 48,
              padding: "0px 45px",
              fontSize: 16,
            }}
          >
            GET STARTED
          </Button>
        </Box>
        <Box>
          <Box
            component="img"
            sx={{
              maxHeight: "100%",
              position: "relative",
              maxWidth: "80%",
              height: "auto",
              width: "100%",
              mt: 3,
              ml: 7,
            }}
            alt="Header Showcase"
            src={headerShowcase}
          />
        </Box>
      </Box>
      <Second />
      <OurProduct />
      <ContactUs />
      <OurCustomers />
    </>
  );
}

export default Header;
