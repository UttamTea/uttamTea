import React from "react";
import { Box, Typography } from "@mui/material";
import COMPARISON_TABLE_IMG from "../../assets/comparisonTable/WhyUttamTea.png";
const ComparisonTable = () => {
  return (
    <Box mt={"140px"} mb={"36px"}>
      <Typography
        color="#121212"
        fontSize={"2.5rem"}
        fontWeight={400}
        lineHeight={"18px"}
        textAlign={"center"}
        mb={"72px"}
      >
        Why Uttam Pyala Tea?
      </Typography>
      <img
        src={COMPARISON_TABLE_IMG}
        alt="comparison table"
        className="h-auto w-100"
      />
    </Box>
  );
};

export default ComparisonTable;
