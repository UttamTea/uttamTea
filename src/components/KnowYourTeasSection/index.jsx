import React, { useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import KASHMIRI_KAHRA from "../../assets/teas/Kashmiri.png";
import MATCH_TEA from "../../assets/teas/Match.png";
import GREEN_TEA from "../../assets/teas/Green.png";
import NOON_TEA from "../../assets/teas/Noon.png";
import BLACK_TEA from "../../assets/teas/Black.png";
import WHITE_TEA from "../../assets/teas/White.png";

const DATA = [
  {
    title: "Kashmiri Kahwa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: KASHMIRI_KAHRA,
  },

  {
    title: "Matcha Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: MATCH_TEA,
  },
  {
    title: "Green Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: GREEN_TEA,
  },
  {
    title: "Noon Chai",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: NOON_TEA,
  },
  {
    title: "Black Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: BLACK_TEA,
  },
  {
    title: "White Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    img: WHITE_TEA,
  },
];
const SelectedTeaCard = ({ index }) => {
  const itemData = DATA[index];
  return (
    <Box display={"flex"} gap={"6rem"} mt={"4.5rem"}>
      <img src={itemData.img} />
      <Box maxWidth={"598px"}>
        <Typography
          fontSize={"2rem"}
          fontWeight={400}
          fontFamily={"Literata"}
          color="#121212"
          lineHeight={"2.5rem"}
        >
          {itemData.title}
        </Typography>
        <Typography
          color="#535353"
          mt={"0.75rem"}
          fontSize={"1rem"}
          fontWeight={400}
          fontFamily={"Manrope"}
          lineHeight={"1.5rem"}
        >
          {itemData.description}
        </Typography>
        <Button variant="black" sx={{ mt: "2.5rem" }}>
          Read More
        </Button>
      </Box>
    </Box>
  );
};
const KnowYourTeasSection = () => {
  const [selectedTea, setSelectedTea] = useState(0);
  return (
    <ContainerWrapper>
      <Box px={"106px"} mt={"140px"} mb={"5.2rem"}>
        <Typography
          color="#121212"
          fontSize={"2.5rem"}
          lineHeight={"3rem"}
          fontWeight={400}
          textAlign={"center"}
          fontFamily={"Literata"}
          mb={"50px"}
        >
          Know your Teas
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"2.5rem"}
          justifyContent={"center"}
        >
          {DATA.map((item, index) => {
            return (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setSelectedTea(index)}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <img
                  src={item.img}
                  alt={item.img}
                  style={{ height: "106px", width: "106px" }}
                />
                <Typography
                  fontSize={"1rem"}
                  fontWeight={index === selectedTea ? 500 : 400}
                  color={index === selectedTea ? "#691E0F" : "#6C6C6C"}
                  fontFamily={"Manrope"}
                  mt={"0.685rem"}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <SelectedTeaCard index={selectedTea} />
      </Box>
    </ContainerWrapper>
  );
};

export default KnowYourTeasSection;
