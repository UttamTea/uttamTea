import React from "react";
import { Box } from "@mui/material";
import WhatsAppIcon from "../../assets/watsaap/icons8-whatsapp.svg";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919313633232&text=Hello%2C%20I%20want%20more%20info%20about%20Uttam%20Tea%20products!",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box
      onClick={handleWhatsAppClick}
      sx={{
        position: "fixed",
        bottom: { xs: "20px", md: "30px" },
        right: { xs: "20px", md: "30px" },
        width: { xs: "50px", md: "60px" },
        height: { xs: "50px", md: "60px" },
        cursor: "pointer",
        zIndex: 9999,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default WhatsAppButton;
