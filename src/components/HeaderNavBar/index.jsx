import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";
import ContainerWrapper from "../common/ContainerWrapper";
const TABS = [
  {
    title: "Shop +",
    key: "shop",
  },
  {
    title: "Home",
    key: "home",
  },
  {
    title: "FAQs",
    key: "faq",
  },
  {
    title: "Blogs",
    key: "blogs",
  },
];
const HeaderNavBar = () => {
  const [selectedTab, setSelectedTab] = useState("shop");
  return (
    <ContainerWrapper>
      <Box mx={"1.25rem"} mt={"2.5rem"}>
        <Box
          width={"100%"}
          bgcolor={"#7F3B2D"}
          p={"0.75rem 5.625rem"}
          display={"flex"}
          borderRadius={"1.25rem"}
          alignItems={"center"}
          justifyContent={"center"} // changed from space-between
          position="relative"
        >
          {/* Left - Tabs */}
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"2rem"}
            position="absolute"
            left="5.625rem"
          >
            {TABS.map((item) => (
              <Box
                key={item.key}
                p={"0.5rem 1rem"}
                width={"fit-content"}
                bgcolor={selectedTab === item.key ? "#fff" : "transparent"}
                onClick={() => setSelectedTab(item.key)}
                borderRadius={"0.5rem"}
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  fontSize={"1.125rem"}
                  fontFamily={"Manrope"}
                  fontWeight={400}
                  color={selectedTab === item.key ? "#121212" : "#fff"}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Center - Logo */}
          <Box>
            <img src={LOGO} alt="logo" />
          </Box>

          {/* Right - Buttons */}
          <Box
            display={"flex"}
            alignItems={"center"}
            position="absolute"
            right="5.625rem"
          >
            <Button variant="transparent">Login</Button>
            <Button variant="lightBrown">
              <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                {/* SVG code */}
                Cart(0)
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default HeaderNavBar;
