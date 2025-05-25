import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";
import ContainerWrapper from "../common/ContainerWrapper";
import { useNavigate } from "react-router-dom";
import HAMBURGER_ICON from "../../assets/icons/Hamburger.svg";
import RESP_LOGO from "../../assets/logoResp.svg";
import CART_ICON_RESP from "../../assets/icons/CartResp.svg";
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
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("shop");
  return (
    <ContainerWrapper>
      <Box
        mx={{ xs: "0", md: "1.25rem" }}
        mt={{ xs: "0", md: "0" }}
        pt={{ xs: "0", md: "2.25rem" }}
      >
        <Box
          width={"100%"}
          bgcolor={"#007F3D"}
          p={{ xs: "0.625rem 1rem", md: "0.75rem 5.625rem" }}
          display={"flex"}
          borderRadius={{ xs: "0", md: "1.25rem" }}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", md: "center" }} // changed from space-between
          position="relative"
        >
          {/* Left - Tabs */}
          <Box
            display={{ xs: "none", md: "flex" }}
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
          <Box display={{ xs: "flex", md: "none" }}>
            <img
              src={HAMBURGER_ICON}
              alt="hamburger"
              style={{ height: "24px", width: "24px" }}
            />
          </Box>

          {/* Center - Logo */}
          <Box display={{ xs: "none", md: "flex" }}>
            <img
              src={LOGO}
              alt="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box display={{ xs: "flex", md: "none" }}>
            <img
              src={RESP_LOGO}
              alt="logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>

          {/* Right - Buttons */}
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems={"center"}
            position="absolute"
            right="5.625rem"
          >
            <Button variant="transparent">Login</Button>
            <Button variant="darkGreen">
              <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                Cart(0)
              </Box>
            </Button>
          </Box>
          <Box display={{ xs: "flex", md: "none" }}>
            <Button variant="darkGreen" sx={{ padding: "8px 12px !important" }}>
              <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                <img src={CART_ICON_RESP} alt="cart" />
                {0}
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default HeaderNavBar;
