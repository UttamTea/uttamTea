import { Box, Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";
import ContainerWrapper from "../common/ContainerWrapper";
import { useNavigate } from "react-router-dom";
import HAMBURGER_ICON from "../../assets/icons/Hamburger.svg";
import RESP_LOGO from "../../assets/logoResp.svg";
import CART_ICON_RESP from "../../assets/icons/CartResp.svg";
import SideNavDrawer from "./SideNavDrawer";
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
const TEA_TYPES = [
  {
    id: "112",
    name: "Piyala Tea",
  },
  {
    id: "114",
    name: "Green Tea",
  },
  {
    id: "113",
    name: "Assam Tea",
  },
];
const HeaderNavBar = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("shop");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleHamburgerClick = () => {
    setOpenDrawer(true);
  };
  const handleClick = (event, value) => {
    if (value === "shop") {
      setAnchorEl(event.currentTarget);
      setOpenPopover(true);
    } else {
      setOpenPopover(false);
      if (value === "home") {
        navigate("/");
      } else if (value === "faq") {
        const faqSection = document.getElementById("FAQSECTION");
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#FAQSECTION"); // fallback for navigation if not on home page
        }
      }
    }
  };

  const handleShopItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <ContainerWrapper>
      <SideNavDrawer open={openDrawer} setOpen={setOpenDrawer} />
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
                onClick={(event) => handleClick(event, item.key)}
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
          <Box
            display={{ xs: "flex", md: "none" }}
            onClick={handleHamburgerClick}
          >
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
          <Box marginLeft={"10px"} display={{ xs: "flex", md: "none" }}>
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
        <Popover
          open={openPopover}
          anchorEl={anchorEl}
          onClose={() => setOpenPopover(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            mt: 2,
            ".MuiPaper-root": {
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            },
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box bgcolor="#fff" py="0.75rem" minWidth={390}>
            {TEA_TYPES.map((item, index) => (
              <React.Fragment key={item.id}>
                <Box
                  px="1rem"
                  py="0.625rem"
                  sx={{
                    cursor: "pointer",
                    borderRadius: "0.375rem",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#F5F5F5", // light gray hover background
                    },
                  }}
                  onClick={() => handleShopItemClick(item.id)}
                >
                  <Typography
                    fontSize="0.9375rem"
                    fontWeight={400}
                    fontFamily="Manrope"
                    color="#121212"
                  >
                    {item.name}
                  </Typography>
                </Box>
                {index !== TEA_TYPES.length - 1 && (
                  <Box mx="1rem" borderBottom="1px solid #EDE5DB" />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Popover>
      </Box>
    </ContainerWrapper>
  );
};

export default HeaderNavBar;
