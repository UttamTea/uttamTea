import {
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon.svg";
import CartContentSection from "./CartContentSection";
import CartTotalPaymentDetails from "./CartTotalPaymentDetails";
import PersonalDetailsModal from "../PersonalDetailsModal/PersonalDetailsModal";

const Cart = ({ open, setOpen }) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handlePersonalDetailsModalClose = () => {
    setOpenDetailModal(false);
  };
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <PersonalDetailsModal
        open={openDetailModal}
        handleClose={handlePersonalDetailsModalClose}
      />

      <Box
        height="100vh"
        position={"relative"}
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
        <CartContentSection />
        <CartTotalPaymentDetails setOpenDetailModal={setOpenDetailModal} />
      </Box>
    </Drawer>
  );
};

export default Cart;
