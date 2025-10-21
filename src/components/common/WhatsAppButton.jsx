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
      sx={{ position: "fixed", bottom: { xs: "20px", md: "30px" }, right: { xs: "20px", md: "30px" }, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '6px', md: '8px' } }}
    >
      <Box
        onClick={handleWhatsAppClick}
        sx={{
        position: "relative",
        mb: { xs: '-6px', md: '-8px' },
        width: { xs: "56px", md: "68px" },
        height: { xs: "56px", md: "68px" },
        cursor: "pointer",
        zIndex: 9999,
        borderRadius: "50%",
        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
        
        // Continuous floating animation
        '@keyframes float': {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-8px)',
          },
        },
        
        // Pulsing glow animation
        '@keyframes pulseGlow': {
          '0%, 100%': { 
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.4)',
          },
          '50%': { 
            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5), 0 0 0 8px rgba(37, 211, 102, 0)',
          },
        },
        
        // Bouncy wiggle on hover
        '@keyframes wiggle': {
          '0%': { transform: 'translateY(-10px) rotate(0deg) scale(1.2)' },
          '15%': { transform: 'translateY(-12px) rotate(-8deg) scale(1.25)' },
          '30%': { transform: 'translateY(-10px) rotate(8deg) scale(1.2)' },
          '45%': { transform: 'translateY(-12px) rotate(-6deg) scale(1.25)' },
          '60%': { transform: 'translateY(-10px) rotate(6deg) scale(1.2)' },
          '75%': { transform: 'translateY(-12px) rotate(-3deg) scale(1.25)' },
          '100%': { transform: 'translateY(-10px) rotate(0deg) scale(1.2)' },
        },
        
        // Apply continuous floating and pulsing
        animation: 'float 2.5s ease-in-out infinite, pulseGlow 2s ease-in-out infinite',
        
        transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        
        '&:hover': {
          animation: 'wiggle 0.6s ease-in-out, pulseGlow 0.6s ease-in-out infinite',
          boxShadow: '0 16px 48px rgba(37, 211, 102, 0.6), 0 0 0 12px rgba(37, 211, 102, 0)',
        },
        
        '&:active': {
          transform: 'scale(0.92)',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
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

      {/* label below the icon */}
      <Box
        onClick={handleWhatsAppClick}
        sx={{
          cursor: 'pointer',
          textAlign: 'center',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: 'Manrope, Arial, sans-serif',
            fontSize: { xs: '11px', md: '12px' },
            fontWeight: 600,
            color: '#121212',
            background: 'rgba(255,255,255,0.92)',
            padding: { xs: '4px 8px', md: '6px 10px' },
            borderRadius: '999px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
            lineHeight: 1,
          }}
        >
          Talk to us
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsAppButton;
