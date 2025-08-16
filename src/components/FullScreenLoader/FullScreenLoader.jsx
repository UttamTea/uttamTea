import React, { useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const FullScreenLoader = ({ loading }) => {
  // Prevent scrolling when loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999,
        backdropFilter: "blur(6px)", // Blur effect
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default FullScreenLoader;
