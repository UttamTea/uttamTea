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
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"2rem"}>
            {TABS.map((item) => {
              return (
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
              );
            })}
          </Box>
          <Box>
            <img src={LOGO} alt="logo" />
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Button variant="transparent">Login</Button>
            <Button variant="lightBrown">
              <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M7.5 8.17V7.2C7.5 4.95 9.31 2.74 11.56 2.53C14.24 2.27 16.5 4.38 16.5 7.01V8.39"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99995 22.5H14.9999C19.0199 22.5 19.7399 20.89 19.9499 18.93L20.6999 12.93C20.9699 10.49 20.2699 8.5 15.9999 8.5H7.99995C3.72995 8.5 3.02995 10.49 3.29995 12.93L4.04995 18.93C4.25995 20.89 4.97995 22.5 8.99995 22.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4955 12.5H15.5045"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.49451 12.5H8.50349"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
