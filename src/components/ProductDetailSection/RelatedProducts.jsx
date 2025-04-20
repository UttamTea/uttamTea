import { Box, Typography } from "@mui/material";
import React from "react";
import AssamTeaSection from "../AssamTeaSection";

const RelatedProducts = () => {
  return (
    <Box mt={"112px"}>
      <Typography
        fontSize={"2.5rem"}
        lineHeight={"3rem"}
        fontFamily={"Literata"}
        fontWeight={400}
        color="#121212"
      >
        Related Products
      </Typography>
      <AssamTeaSection marginTop={"1.5rem"} />
    </Box>
  );
};

export default RelatedProducts;
