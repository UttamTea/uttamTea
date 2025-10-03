import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LOGO from "../../assets/footerLogo.png";
import { useNavigate } from "react-router-dom";
const FOOTER_TABS_ITEMS = [
  {
    title: "about us",
    key: "about us",
    url: "/about us",
  },
  {
    title: "products",
    key: "products",
    url: "/products",
  },
  {
    title: "blogs",
    key: "blogs",
    url: "/blogs",
  },
  {
    title: "faqs",
    key: "faqs",
    url: "/faqs",
  },
  {
    title: "contact us",
    key: "contact us",
    url: "/contact-us",
  },
  {
    title: "refund policy",
    key: "refund policy",
    url: "/refund-policy",
  },

  {
    title: "privacy policy",
    key: "privacy policy",
    url: "/privacy-policy",
  },

  {
    title: "terms & conditions",
    key: "terms & conditions",
    url: "/terms-and-conditions",
  },
];
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      bgcolor={"#7F3B2D"}
      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
      px={{ xs: "1rem", md: "110px" }}
      py={{ xs: "2rem", md: "3.5rem" }}
    >
      <Box
        width={"100%"}
        display={{ xs: "block", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={{ md: "flex-start" }}
      >
        <img src={LOGO} alt="footer" className="footerLogo" />
        <Box minWidth={{ xs: "100%", md: 356 }} mt={{ xs: "2rem", md: "0" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"0.75rem"}
            mb={"1rem"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 13.17 14.58 18.92 12.77 21.11C12.37 21.59 11.64 21.59 11.24 21.11C9.42 18.92 5 13.17 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                fill="#FEFEFE"
              />
            </svg>
            <Typography
              color="#E4D7D4"
              fontFamily={"Manrope"}
              fontSize={"0.875rem"}
              fontWeight={400}
            >
              Delhi, New Delhi, Delhi 110055
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"1rem"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"1rem"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.23 15.2598L16.69 14.9698C16.08 14.8998 15.48 15.1098 15.05 15.5398L13.21 17.3798C10.38 15.9398 8.06004 13.6298 6.62004 10.7898L8.47004 8.93977C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.63004 3.76977 7.78004 3.00977 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                  fill="#FEFEFE"
                />
              </svg>
              <Typography
                color="#E4D7D4"
                fontFamily={"Manrope"}
                fontSize={"0.875rem"}
                fontWeight={400}
              >
                (123) 456-7890
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={"1rem"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_365_630)">
                  <path
                    d="M23.7888 4.76953L16.5101 12.0014L23.7888 19.2332C23.9204 18.9582 24.0002 18.6541 24.0002 18.3295V5.67323C24.0002 5.34853 23.9204 5.04455 23.7888 4.76953Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M21.8917 3.5625H2.11049C1.78579 3.5625 1.4818 3.64233 1.20679 3.77391L10.5097 13.03C11.3323 13.8525 12.6699 13.8525 13.4925 13.03L22.7954 3.77391C22.5204 3.64233 22.2164 3.5625 21.8917 3.5625Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M0.211406 4.76953C0.0798281 5.04455 0 5.34853 0 5.67323V18.3295C0 18.6542 0.0798281 18.9582 0.211406 19.2332L7.49011 12.0014L0.211406 4.76953Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M15.5167 12.9941L14.4868 14.0241C13.1162 15.3947 10.886 15.3947 9.51543 14.0241L8.48549 12.9941L1.20679 20.226C1.4818 20.3575 1.78579 20.4374 2.11049 20.4374H21.8917C22.2164 20.4374 22.5204 20.3575 22.7954 20.226L15.5167 12.9941Z"
                    fill="#FEFEFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_365_630">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography
                color="#E4D7D4"
                fontFamily={"Manrope"}
                fontSize={"0.875rem"}
                fontWeight={400}
              >
                info@uttamtea.com
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={{ xs: "1.5rem", md: "2rem" }}
          >
            <Typography
              color="#BF9D96"
              fontSize={"0.875rem"}
              fontWeight={400}
              fontFamily={"Manrope"}
            >
              Follow us on Social Media
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={{ xs: "1rem", md: "1.5rem" }}
            >
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/uttamteaindia/",
                    "_blank"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12.6144 21.2148H3.99346C3.44463 21.2148 3 20.7699 3 20.2213V4.2083C3 3.65954 3.4447 3.21484 3.99346 3.21484H20.0066C20.5552 3.21484 21 3.65954 21 4.2083V20.2213C21 20.77 20.5552 21.2148 20.0066 21.2148H15.4197V14.2443H17.7594L18.1098 11.5277H15.4197V9.79333C15.4197 9.00683 15.6381 8.47085 16.766 8.47085L18.2045 8.47022V6.0405C17.9557 6.0074 17.1018 5.93343 16.1083 5.93343C14.0343 5.93343 12.6144 7.19942 12.6144 9.5243V11.5277H10.2687V14.2443H12.6144V21.2148Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </Box>
              <Box
                sx={{ cursor: "pointer" }}
                // onClick={() =>
                //   window.open(
                //     "https://www.facebook.com/uttamteaindia/?ref=_xav_ig_profile_page_web#",
                //     "_blank"
                //   )
                // }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12.0039 6.21484C12.0039 6.21484 15.7819 6.21523 18.3008 6.40234C18.6523 6.44509 19.4199 6.44817 20.1045 7.18457C20.6439 7.74542 20.8203 9.01953 20.8203 9.01953C20.824 9.05002 21 10.5308 21 12.0107V13.4131C21 14.909 20.8203 16.4043 20.8203 16.4043C20.82 16.4063 20.6433 17.6778 20.1045 18.2383C19.4199 18.9747 18.6523 18.9782 18.3008 19.0215C15.7819 19.2086 12 19.2148 12 19.2148C12 19.2148 7.31988 19.1714 5.87988 19.0293C5.47937 18.9525 4.57964 18.9747 3.89453 18.2383C3.35586 17.6777 3.17998 16.4064 3.17969 16.4043C3.17969 16.4043 3.00002 14.909 3 13.4131V12.0107C3 10.5308 3.17604 9.05002 3.17969 9.01953C3.17969 9.01953 3.35522 7.74551 3.89453 7.18457C4.57966 6.44813 5.34709 6.44509 5.69922 6.40234C8.21809 6.21523 11.9961 6.21484 11.9961 6.21484H12.0039ZM10.1416 15.1123L15.0039 12.5244L10.1406 9.91895L10.1416 15.1123Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </Box>
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/uttamtea/", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 3.21484C14.4442 3.21484 14.751 3.22476 15.7109 3.26855C16.6688 3.31226 17.3231 3.46502 17.8955 3.6875C18.4873 3.91746 18.9889 4.2253 19.4893 4.72559C19.9895 5.2259 20.2974 5.7276 20.5273 6.31934C20.7498 6.89176 20.9026 7.54609 20.9463 8.50391C20.9901 9.46385 21 9.77059 21 12.2148C21 14.6591 20.9901 14.9658 20.9463 15.9258C20.9026 16.8836 20.7498 17.5379 20.5273 18.1104C20.2974 18.7021 19.9895 19.2038 19.4893 19.7041C18.9889 20.2044 18.4872 20.5122 17.8955 20.7422C17.3231 20.9646 16.6688 21.1174 15.7109 21.1611C14.751 21.2049 14.4442 21.2148 12 21.2148C9.55575 21.2148 9.24901 21.2049 8.28906 21.1611C7.33124 21.1174 6.67691 20.9646 6.10449 20.7422C5.51275 20.5122 5.01106 20.2044 4.51074 19.7041C4.01046 19.2038 3.70261 18.7021 3.47266 18.1104C3.25018 17.5379 3.09742 16.8836 3.05371 15.9258C3.00991 14.9658 3 14.6591 3 12.2148C3 9.77059 3.00991 9.46385 3.05371 8.50391C3.09742 7.54609 3.25018 6.89176 3.47266 6.31934C3.70261 5.72759 4.01046 5.2259 4.51074 4.72559C5.01106 4.2253 5.51275 3.91746 6.10449 3.6875C6.67691 3.46502 7.33124 3.31226 8.28906 3.26855C9.24901 3.22476 9.55575 3.21484 12 3.21484ZM12 4.83691C9.59696 4.83691 9.31224 4.84538 8.36328 4.88867C7.48593 4.92868 7.00952 5.07598 6.69238 5.19922C6.27229 5.36248 5.97215 5.55711 5.65723 5.87207C5.34227 6.18699 5.14764 6.48713 4.98438 6.90723C4.86113 7.22436 4.71383 7.70077 4.67383 8.57812C4.63053 9.52708 4.62207 9.8118 4.62207 12.2148C4.62207 14.6179 4.63053 14.9026 4.67383 15.8516C4.71383 16.7289 4.86113 17.2053 4.98438 17.5225C5.14764 17.9426 5.34231 18.2427 5.65723 18.5576C5.97215 18.8726 6.27229 19.0672 6.69238 19.2305C7.00952 19.3537 7.48593 19.501 8.36328 19.541C9.31213 19.5843 9.59678 19.5928 12 19.5928C14.4032 19.5928 14.6879 19.5843 15.6367 19.541C16.5141 19.501 16.9905 19.3537 17.3076 19.2305C17.7277 19.0672 18.0279 18.8726 18.3428 18.5576C18.6577 18.2427 18.8524 17.9426 19.0156 17.5225C19.1389 17.2053 19.2862 16.7289 19.3262 15.8516C19.3695 14.9026 19.3779 14.6179 19.3779 12.2148C19.3779 9.8118 19.3695 9.52708 19.3262 8.57812C19.2862 7.70077 19.1389 7.22436 19.0156 6.90723C18.8524 6.48713 18.6577 6.18699 18.3428 5.87207C18.0279 5.55711 17.7277 5.36248 17.3076 5.19922C16.9905 5.07598 16.5141 4.92868 15.6367 4.88867C14.6878 4.84538 14.403 4.83691 12 4.83691ZM12 7.59277C14.5524 7.59277 16.6221 9.66237 16.6221 12.2148C16.6221 14.7673 14.5524 16.8369 12 16.8369C9.44752 16.8369 7.37793 14.7673 7.37793 12.2148C7.37794 9.66237 9.44753 7.59278 12 7.59277ZM12 9.21484C10.3431 9.21485 9.00001 10.558 9 12.2148C9 13.8717 10.3431 15.2148 12 15.2148C13.6568 15.2148 15 13.8717 15 12.2148C15 10.558 13.6568 9.21484 12 9.21484ZM16.8047 6.33105C17.4008 6.33131 17.8835 6.81406 17.8838 7.41016C17.8838 8.00647 17.4009 8.48998 16.8047 8.49023C16.2082 8.49023 15.7246 8.00663 15.7246 7.41016C15.7249 6.8139 16.2084 6.33105 16.8047 6.33105Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        height={"1px"}
        width={"100%"}
        bgcolor={"#FEFEFE"}
        sx={{ opacity: "0.3" }}
        mt={{ xs: "2rem", md: "3rem" }}
        mb={{ xs: "1.5rem", md: "2rem" }}
      />
      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box
          width={479}
          display="flex"
          flexWrap="wrap"
          columnGap="40px"
          rowGap="20px"
        >
          {FOOTER_TABS_ITEMS.map((item) => {
            return (
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  if (
                    item.key === "terms & conditions" ||
                    item.key === "privacy policy" ||
                    item.key === "refund policy"
                  ) {
                    navigate(item.url);
                  }
                }}
                key={item.key}
                fontSize={"0.875rem"}
                fontWeight={400}
                fontFamily={"Manrope"}
                textTransform={"uppercase"}
                color="#FEFEFE"
                whiteSpace={"nowrap"}
              >
                {item.title}
              </Typography>
            );
          })}
        </Box>
        <Typography
          color="#BF9D96"
          fontSize={"14px"}
          fontWeight={400}
          fontFamily={"Manrope"}
          lineHeight={"20px"}
        >
          Copyright © 2025 • Uttam Chai
        </Typography>
      </Box>
      <Grid rowSpacing={"28px"} display={{ md: "none" }} container>
        {FOOTER_TABS_ITEMS.map((item) => {
          return (
            <Grid
              key={item.key}
              item
              size={{ xs: 6 }}
              onClick={() => {
                if (
                  item.key === "terms & conditions" ||
                  item.key === "privacy policy" ||
                  item.key === "refund policy"
                ) {
                  navigate(item.url);
                }
              }}
            >
              <Typography
                fontSize={"0.875rem"}
                fontWeight={400}
                fontFamily={"Manrope"}
                textTransform={"uppercase"}
                color="#FEFEFE"
                whiteSpace={"nowrap"}
              >
                {item.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Footer;
