import { Box, Typography } from "@mui/material";
import React from "react";
import AssamTeaSection from "../AssamTeaSection";

const RelatedProducts = () => {
  return (
    <Box mt={{ xs: "64px", md: "112px" }}>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2.5rem" }}
        lineHeight={{ xs: "2rem", md: "3rem" }}
        fontFamily={"Literata"}
        fontWeight={400}
        color="#121212"
      >
        Related Products
      </Typography>
      <AssamTeaSection productDetail={true} />
    </Box>
  );
};

export default RelatedProducts;
