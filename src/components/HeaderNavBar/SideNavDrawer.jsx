import React from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SideNavDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={handleClose}
      ModalProps={{
        keepMounted: true, // Improves performance on mobile
      }}
      PaperProps={{
        sx: {
          height: "50vh",
          margin: "20px", // margin from all sides
          borderRadius: 2,
          padding: 2,
          backgroundColor: "#fff",
          overflow: "auto", // enable scroll if content overflows
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Content */}
      <Box mt={2}>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Box>
    </Drawer>
  );
};

export default SideNavDrawer;
