import React from "react";
import { Container } from "@mui/material";

const ContainerWrapper = ({ children }) => {
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: "1440px !important",
        mx: "auto",
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerWrapper;
