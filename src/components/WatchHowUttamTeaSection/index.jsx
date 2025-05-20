import React, { useRef, useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import TEST_VIDEO from "../../assets/mock/testVideo.mp4";

const WatchHowUttamTeaSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FFF 0%, #FCF4ED 12.02%, #E4D8C1 100%)",
      }}
      pb={"5.2rem"}
    >
      <ContainerWrapper>
        <Box px={{ xs: "1rem", md: "106px" }} mt={{ xs: "70px", md: "140px" }}>
          <Typography
            color="#121212"
            fontFamily={"Literata"}
            fontWeight={400}
            lineHeight={{ xs: "2rem", md: "3rem" }}
            textAlign={"center"}
            marginX={"auto"}
            fontSize={{ xs: "28px", md: "2.5rem" }}
            px={{ xs: "16px", md: "0" }}
          >
            Watch how Uttam Tea is Prepared
          </Typography>
          <Box
            mt={{ xs: "28px", md: "2.5rem" }}
            borderRadius={"1.5rem"}
            height={{ xs: "202px", md: "686px" }}
            overflow={"hidden"}
            position="relative"
          >
            <video
              ref={videoRef}
              src={TEST_VIDEO}
              className="h-auto w-100"
              style={{
                borderRadius: "1.5rem",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <IconButton
              onClick={handleVideoToggle}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              {isPlaying ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>
          </Box>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default WatchHowUttamTeaSection;
