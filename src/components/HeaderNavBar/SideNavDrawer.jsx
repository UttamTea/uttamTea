import React, { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import LOGO from "../../assets/footerLogo.png";
import CART_ICON_RESP from "../../assets/icons/CartResp.svg";
import { useNavigate } from "react-router-dom"; // <-- For navigation
import DOWN_ARROW from "../../assets/icons/down.svg";
import UP_ARROW from "../../assets/icons/up.svg";
import RIGHT_ARROW from "../../assets/icons/rightArrow.svg";

const TABS = [
  {
    title: "Shop +",
    key: "shop",
    childrens: [
      { key: "112", name: "Piyala Tea" },
      { key: "114", name: "Green Tea" },
      { key: "113", name: "Assam Tea" },
    ],
  },
  { title: "Home", key: "home", path: "/" },
  { title: "FAQs", key: "faq", path: "/faqs" },
  // { title: "Blogs", key: "blogs", path: "/blogs" },
];

const SideNavDrawer = ({ open, setOpen, productsData }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);
  const toggleShop = () => setExpanded(!expanded);

  const handleNavigate = (title) => {
    // navigate(title);
    setOpen(false);
    if (title === "FAQs") {
      const faqSection = document.getElementById("FAQSECTION");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#FAQSECTION"); // fallback for navigation if not on home page
      }
    } else if (title === "Home") {
      navigate("/");
    } else if (title !== "Blogs") {
      navigate(`/product/${title}`);
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "100vw",
          height: "90vh",
          // height: "fit-content",
          backgroundColor: "#fff",
          marginTop: "40px",
        },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        bgcolor="#7F3B2D"
        justifyContent="space-between"
        alignItems="center"
        py="1rem"
        px="12px"
      >
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
        <img src={LOGO} alt="logo" style={{ width: "65px", height: "38px" }} />
        <Box display={{ xs: "flex", md: "none" }}>
          <Button variant="lighBrown" sx={{ padding: "8px 12px !important" }}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <img src={CART_ICON_RESP} alt="cart" />
              {0}
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        {/* Content */}
        <Box mt={2}>
          {TABS.map((tab) => (
            <React.Fragment key={tab.key}>
              <Box
                sx={{
                  px: "1rem",
                  py: "0.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f9f2e8",
                  borderRadius: "10px",
                  mx: "1rem",
                  mb: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (tab.childrens) {
                    toggleShop();
                  } else {
                    handleNavigate(tab.title);
                  }
                }}
              >
                <Typography
                  fontWeight={400}
                  color="#121212"
                  fontSize={"1.125rem"}
                  lineHeight={"150%"}
                  fontFamily={"Manrope"}
                >
                  {tab.title}
                </Typography>
                {tab.childrens ? (
                  expanded ? (
                    <img src={UP_ARROW} alt="up" />
                  ) : (
                    <img src={DOWN_ARROW} alt="down" />
                  )
                ) : (
                  <img src={RIGHT_ARROW} alt="right" />
                )}
              </Box>

              {/* Render children directly below Shop + */}
              {tab.key === "shop" && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Box px="2rem">
                    {productsData?.map((child) => (
                      <Typography
                        key={child.documentId}
                        sx={{
                          py: "0.5rem",
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          color: "#383838",
                          fontFamily: "Manrope",
                          lineHeight: "20px",
                        }}
                        onClick={() => {
                          handleNavigate(child.documentId);
                        }}
                      >
                        {child.name}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </Box>
        <Box
          px={"1rem"}
          pb={"1rem"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            color="#BF9D96"
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"Manrope"}
            lineHeight={"normal"}
          >
            Follow us on Social Media
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"1.5rem"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.6144 21H3.99346C3.44463 21 3 20.5551 3 20.0065V3.99345C3 3.44469 3.4447 3 3.99346 3H20.0066C20.5552 3 21 3.44469 21 3.99345V20.0065C21 20.5552 20.5552 21 20.0066 21H15.4197V14.0294H17.7594L18.1098 11.3128H15.4197V9.57849C15.4197 8.79198 15.6381 8.256 16.766 8.256L18.2045 8.25537V5.82566C17.9557 5.79255 17.1018 5.71859 16.1083 5.71859C14.0343 5.71859 12.6144 6.98457 12.6144 9.30945V11.3128H10.2687V14.0294H12.6144V21Z"
                fill="#585858"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0039 6C12.0039 6 15.7819 6.00038 18.3008 6.1875C18.6523 6.23024 19.4199 6.23333 20.1045 6.96973C20.6439 7.53057 20.8203 8.80469 20.8203 8.80469C20.824 8.83518 21 10.316 21 11.7959V13.1982C21 14.6941 20.8203 16.1895 20.8203 16.1895C20.82 16.1915 20.6433 17.4629 20.1045 18.0234C19.4199 18.7599 18.6523 18.7633 18.3008 18.8066C15.7819 18.9938 12 19 12 19C12 19 7.31988 18.9565 5.87988 18.8145C5.47937 18.7376 4.57964 18.7599 3.89453 18.0234C3.35586 17.4628 3.17998 16.1916 3.17969 16.1895C3.17969 16.1895 3.00002 14.6941 3 13.1982V11.7959C3 10.316 3.17604 8.83518 3.17969 8.80469C3.17969 8.80469 3.35522 7.53066 3.89453 6.96973C4.57966 6.23329 5.34709 6.23024 5.69922 6.1875C8.21809 6.00038 11.9961 6 11.9961 6H12.0039ZM10.1416 14.8975L15.0039 12.3096L10.1406 9.7041L10.1416 14.8975Z"
                fill="#585858"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3C14.4442 3 14.751 3.00991 15.7109 3.05371C16.6688 3.09742 17.3231 3.25018 17.8955 3.47266C18.4873 3.70261 18.9889 4.01046 19.4893 4.51074C19.9895 5.01106 20.2974 5.51275 20.5273 6.10449C20.7498 6.67691 20.9026 7.33124 20.9463 8.28906C20.9901 9.24901 21 9.55575 21 12C21 14.4442 20.9901 14.751 20.9463 15.7109C20.9026 16.6688 20.7498 17.3231 20.5273 17.8955C20.2974 18.4872 19.9895 18.9889 19.4893 19.4893C18.9889 19.9895 18.4872 20.2974 17.8955 20.5273C17.3231 20.7498 16.6688 20.9026 15.7109 20.9463C14.751 20.9901 14.4442 21 12 21C9.55575 21 9.24901 20.9901 8.28906 20.9463C7.33124 20.9026 6.67691 20.7498 6.10449 20.5273C5.51275 20.2974 5.01106 19.9895 4.51074 19.4893C4.01046 18.9889 3.70261 18.4873 3.47266 17.8955C3.25018 17.3231 3.09742 16.6688 3.05371 15.7109C3.00991 14.751 3 14.4442 3 12C3 9.55575 3.00991 9.24901 3.05371 8.28906C3.09742 7.33124 3.25018 6.67691 3.47266 6.10449C3.70261 5.51275 4.01046 5.01106 4.51074 4.51074C5.01106 4.01046 5.51275 3.70261 6.10449 3.47266C6.67691 3.25018 7.33124 3.09742 8.28906 3.05371C9.24901 3.00991 9.55575 3 12 3ZM12 4.62207C9.59696 4.62207 9.31224 4.63053 8.36328 4.67383C7.48593 4.71383 7.00952 4.86113 6.69238 4.98438C6.27229 5.14764 5.97215 5.34227 5.65723 5.65723C5.34227 5.97215 5.14764 6.27229 4.98438 6.69238C4.86113 7.00952 4.71383 7.48593 4.67383 8.36328C4.63053 9.31224 4.62207 9.59696 4.62207 12C4.62207 14.403 4.63053 14.6878 4.67383 15.6367C4.71383 16.5141 4.86113 16.9905 4.98438 17.3076C5.14764 17.7277 5.34231 18.0279 5.65723 18.3428C5.97215 18.6577 6.27229 18.8524 6.69238 19.0156C7.00952 19.1389 7.48593 19.2862 8.36328 19.3262C9.31213 19.3695 9.59678 19.3779 12 19.3779C14.4032 19.3779 14.6879 19.3695 15.6367 19.3262C16.5141 19.2862 16.9905 19.1389 17.3076 19.0156C17.7277 18.8524 18.0279 18.6577 18.3428 18.3428C18.6577 18.0279 18.8524 17.7277 19.0156 17.3076C19.1389 16.9905 19.2862 16.5141 19.3262 15.6367C19.3695 14.6878 19.3779 14.403 19.3779 12C19.3779 9.59696 19.3695 9.31224 19.3262 8.36328C19.2862 7.48593 19.1389 7.00952 19.0156 6.69238C18.8524 6.27229 18.6577 5.97215 18.3428 5.65723C18.0279 5.34227 17.7277 5.14764 17.3076 4.98438C16.9905 4.86113 16.5141 4.71383 15.6367 4.67383C14.6878 4.63053 14.403 4.62207 12 4.62207ZM12 7.37793C14.5524 7.37793 16.6221 9.44752 16.6221 12C16.6221 14.5524 14.5524 16.6221 12 16.6221C9.44752 16.6221 7.37793 14.5524 7.37793 12C7.37794 9.44753 9.44753 7.37794 12 7.37793ZM12 9C10.3431 9.00001 9.00001 10.3431 9 12C9 13.6568 10.3431 15 12 15C13.6568 15 15 13.6568 15 12C15 10.3431 13.6568 9 12 9ZM16.8047 6.11621C17.4008 6.11647 17.8835 6.59922 17.8838 7.19531C17.8838 7.79163 17.4009 8.27513 16.8047 8.27539C16.2082 8.27539 15.7246 7.79179 15.7246 7.19531C15.7249 6.59906 16.2084 6.11621 16.8047 6.11621Z"
                fill="#585858"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideNavDrawer;
