import React from "react";
import "./style.css";
import customer1 from "../../images/customer1.png";
import customer2 from "../../images/customer2.png";
import customer3 from "../../images/customer3.png";
import customer4 from "../../images/customer4.png";
import customer5 from "../../images/customer5.png";
import customer6 from "../../images/customer6.png";
import customer7 from "../../images/customer7.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function OurCustomers() {
  return (
    <>
      <Box className="ourCustomer-container">
        <Typography
          style={{ color: "#0b1460", fontSize: 36, fontWeight: "bold" }}
          sx={{ mx: "auto", my: 6, width: 340 }}
        >
          OUR CUSTOMERS
        </Typography>
        <Box className="image-container">
          <Box className="row">
            <Box className="col">
              <img src={customer1} alt="customer1 logo" className="customer1" />
            </Box>
            <Box className="col">
              <img src={customer2} alt="customer2 logo" className="customer2" />
            </Box>
            <Box className="col">
              <img src={customer3} alt="customer3 logo" className="customer3" />
            </Box>
          </Box>
          <br />
          <Box className="row">
            <Box className="col">
              <img src={customer4} alt="customer4 logo" className="customer4" />
            </Box>
            <Box className="col">
              <img src={customer5} alt="customer5 logo" className="customer5" />
            </Box>
            <Box className="col">
              <img src={customer6} alt="customer6 logo" className="customer6" />
            </Box>
            <Box className="col">
              <img src={customer7} alt="customer7 logo" className="customer7" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OurCustomers;
