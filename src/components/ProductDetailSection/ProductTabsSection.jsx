import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const tabStyles = {
  textTransform: "none",
  fontSize: { xs: "1rem", md: "1.25rem" },
  fontWeight: 400,
  color: "#6C6C6C",
  "&.Mui-selected": {
    color: "#691E0F",
    fontWeight: 500,
  },
};

const ProductTabsSection = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(1); // Default to "Ingredients"

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return data?.description || "Description content goes here.";
      case 1:
        return data?.ingredients || "Ingredients content goes here.";
      case 2:
        return data?.howToUse || "How to Use content goes here.";
      case 3:
        return data?.shipping || "Shipping content goes here.";
      default:
        return "";
    }
  };

  return (
    <Box maxWidth={804} mt={{ xs: "48px", md: "112px" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#571C0E",
            height: "3px",
            borderRadius: "2px",
          },
        }}
        sx={{ borderBottom: "1px solid #E0E0E0" }}
      >
        <Tab label="Description" sx={tabStyles} />
        <Tab label="Ingredients" sx={tabStyles} />
        <Tab label="How to Use" sx={tabStyles} />
        <Tab label="Shipping" sx={tabStyles} />
      </Tabs>

      <Box mt={{ xs: "1.25rem", md: "1.5rem" }}>
        <Typography
          fontSize={{ xs: "0.875rem", md: "1rem" }}
          fontWeight={400}
          color="#535353"
          lineHeight="26px"
        >
          {renderTabContent()}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductTabsSection;
