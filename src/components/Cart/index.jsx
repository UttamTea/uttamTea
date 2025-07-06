import {
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CloseIcon from "../../assets/icons/CloseIcon.svg";

const Cart = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        height="100vh"
        width={{ xs: "100vw", md: "35vw" }} // full width on small screens
        bgcolor="#fff"
        py={isXsScreen ? "2rem" : "3rem"}
      >
        <Box
          mb={"1.5rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={isXsScreen ? "1rem" : "2.25rem"}
        >
          <Typography
            sx={{
              fontFamily: "Literata",
              color: "#121212",
              fontSize: isXsScreen ? "1.75rem" : "2rem",
            }}
          >
            {isXsScreen ? "Cart" : "Shopping Cart"}
          </Typography>
          <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
            <img src={CloseIcon} alt="closeIcon" />
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "#ECECEC" }} />
      </Box>
    </Drawer>
  );
};

export default Cart;
