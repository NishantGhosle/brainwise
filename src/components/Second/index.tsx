import React from "react";
import secondRectangle from "../../images/secondRectangle.png";
import secondRectangle2 from "../../images/secondRectangle2.png";
import threeBuildings from "../../images/threeBuildings.png";
import "./style.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Second() {
  return (
    <>
      <Box className="second">
        <Box
          component="img"
          sx={{
            height: "80%",
            width: "50%",
            position: "absolute",
            left: 0,
            top: 460,
            mt: 17,
            zIndex: -1,
          }}
          alt="Second Rectangle"
          src={secondRectangle}
        />
        <Box
          component="img"
          sx={{
            position: "absolute",
            left: 0,
            top: 660,
            mt: 25,
            zIndex: -1,
          }}
          alt="Second Rectangle 2"
          src={secondRectangle2}
        />
        <Box
          component="img"
          sx={{
            maxHeight: 370,
            maxWidth: 330,
            height: "auto",
            width: "100%",
          }}
          alt="Three buildings"
          src={threeBuildings}
        />
        <Box className="second-para ">
          <Typography
            style={{ color: "#7429dd", fontSize: 12.8, fontWeight: "bold" }}
          >
            ABOUT US
          </Typography>
          <Typography
            style={{ color: "#0b1460", fontSize: 36, fontWeight: "bold" }}
          >
            WHO WE ARE
          </Typography>
          <br />
          <Typography style={{ color: "#0b1460", fontSize: 16 }}>
            Brainwise is an Egyptian startup, established to provide AI products
            for business companies, and introduce solutions to boost their
            business plans.
          </Typography>
          <br />
          <Typography style={{ color: "#0b1460", fontSize: 16 }}>
            ● Our Products focus on drive better customer experiences with AI
            chatbots. Cognitive provides an entire platform to engage, support,
            and help your customer. Additional to our Cognitive Chatbot we offer
            the hybrid workforce human-machine collaboration using Business
            Process Automation (RPA) and Machine Learning.
          </Typography>
          <br />
          <Typography style={{ color: "#0b1460", fontSize: 16 }}>
            ● We aim to provide intelligent solutions focuses on artificial
            intelligence, cognitive and Automation to support Digital Business
            Transformation for enterprise.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default Second;
