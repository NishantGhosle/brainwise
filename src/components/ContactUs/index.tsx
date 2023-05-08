import React from "react";
import "./style.css";
import contactRectangle from "../../images/contactRectangle.png";
import twopeople from "../../images/twopeople.png";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

function ContactUs() {
  return (
    <>
      <Box className="contactUs-content">
        <Box className="contactUs-para ">
          <Box
            component="img"
            sx={{
              maxHeight: 500,
              maxWidth: "100%",
              height: "auto",
              width: "100%",
              position: "absolute",
              left: 0,
              top: 1750,
              zIndex: -1,
            }}
            alt="Contact Rectangle"
            src={contactRectangle}
          />
          <Typography
            style={{ color: "#7429dd", fontSize: 12.8, fontWeight: "bold" }}
          >
            CONNECTION
          </Typography>
          <Typography
            style={{ color: "#0b1460", fontSize: 36, fontWeight: "bold" }}
          >
            CONTACT WITH US
          </Typography>
          <section className="get_in_touch">
            <Box className="contact-form row">
              <Box className="form-field col-lg-6">
                <input type="text" id="fname" className="input-text" />
                <label htmlFor="fname" className="label">
                  First name
                </label>
              </Box>
              <Box className="form-field col-lg-6">
                <input type="text" id="lname" className="input-text" />
                <label htmlFor="lname" className="label">
                  Last name
                </label>
              </Box>
              <Box className="form-field col-lg-6">
                <input type="email" id="email" className="input-text" />
                <label htmlFor="email" className="label">
                  Email
                </label>
              </Box>
              <Box className="form-field col-lg-6">
                <input type="number" id="phone" className="input-text" />
                <label htmlFor="phone" className="label">
                  Phone
                </label>
              </Box>
              <Box className="form-field col-lg-12">
                <input type="text" id="text" className="input-text" />
                <label htmlFor="message" className="label">
                  Message
                </label>
              </Box>
              <Button
                sx={{ width: 200, padding: 1, margin: 2 }}
                style={{
                  background: "linear-gradient(to right, #EB16F9, #7429DD)",
                  borderRadius: 11,
                  border: 0,
                  color: "#ffffff",
                  height: 48,
                  padding: "0px 30px",
                  fontSize: 16,
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </section>
        </Box>
        <Box className="">
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
              maxHeight: "85%",
              maxWidth: "50%",
              ml: 24,
              mt: 6,
            }}
            alt="Two people showcase"
            src={twopeople}
          />
        </Box>
      </Box>
    </>
  );
}

export default ContactUs;
