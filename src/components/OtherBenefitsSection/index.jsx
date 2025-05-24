import React, { useState } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import NATURAL_IMG from "../../assets/icons/Natural.svg";
import FAST_PACKAGING_IMG from "../../assets/icons/FastPackaging.svg";
import FRESHLY_IMG from "../../assets/icons/Freshly.svg";
import KADAK_IMG from "../../assets/icons/Kadak.svg";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Card = ({ img, title, description }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <img src={img} alt={img} />
      <Typography
        color="#121212"
        fontSize={{ xs: "1.25rem", md: "1.5rem" }}
        fontWeight={400}
        fontFamily={"Literata"}
        lineHeight={{ xs: "1.25rem", md: "28px" }}
        my={"0.75rem"}
      >
        {title}
      </Typography>
      <Typography
        maxWidth={"235px"}
        color="#535353"
        fontSize={"0.875rem"}
        fontWeight={400}
        fontFamily={"Manrope"}
        lineHeight={"normal"}
      >
        {description}
      </Typography>
    </Box>
  );
};
const OtherBenefitsSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    console.log("email", email);
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: Timestamp.now(),
      });
      alert("Thanks for subscribing!");
      setEmail(""); // reset input
    } catch (error) {
      console.error("Error saving email to Firestore:", error);
      alert("Something went wrong. Try again.");
    }
  };
  return (
    <ContainerWrapper>
      <Box
        mt={{ xs: "76px", md: "140px" }}
        px={{ xs: "1rem", md: "6.25rem" }}
        mb={"5.2rem"}
      >
        <Box
          display={{ xs: "none", md: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Card
            img={NATURAL_IMG}
            title={"100% Natural"}
            description={"No additives, just pure tea leaves and whole spices."}
          />
          <Card
            img={FAST_PACKAGING_IMG}
            title={"Free & Fast Shipping"}
            description={
              "Enjoy doorstep delivery with no extra cost, pan-India."
            }
          />
          <Card
            img={FRESHLY_IMG}
            title={"Freshly Packed"}
            description={
              "Sealed for freshness in small batches to retain full flavor."
            }
          />
          <Card
            img={KADAK_IMG}
            title={"Kadak Flavour"}
            description={
              "Strong, bold, and spiced — just like real Indian chai should be."
            }
          />
        </Box>
        <Grid
          container
          columnSpacing={"1.25rem"}
          rowSpacing={"50px"}
          display={{ xs: "intial", md: "none" }}
        >
          <Grid item size={{ xs: 6, md: 0 }}>
            <Box>
              <Card
                img={NATURAL_IMG}
                title={"100% Natural"}
                description={
                  "No additives, just pure tea leaves and whole spices."
                }
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 6, md: 0 }}>
            <Box>
              <Card
                img={FAST_PACKAGING_IMG}
                title={"Free Shipping"}
                description={
                  "Enjoy doorstep delivery with no extra cost, pan-India."
                }
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 6, md: 0 }}>
            <Box>
              <Card
                img={FRESHLY_IMG}
                title={"Freshly Packed"}
                description={
                  "Sealed for freshness in small batches to retain full flavor."
                }
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 6, md: 0 }}>
            <Box>
              <Card
                img={KADAK_IMG}
                title={"Kadak Flavour"}
                description={
                  "Strong, bold, and spiced — just like real Indian chai should be."
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={{ xs: "76px", md: "138px" }}>
          <Box maxWidth="598px" mx="auto">
            <Typography
              fontSize={{ xs: "1.75rem", md: "2.5rem" }}
              color="#121212"
              fontFamily="Literata"
              textAlign="center"
            >
              Get 20% off your first order
            </Typography>
            <Typography
              mt="0.75rem"
              color="#535353"
              fontSize={{ xs: "0.875rem", md: "1rem" }}
              fontFamily="Manrope"
              textAlign="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Typography>
            <Box
              display="flex"
              mt={3}
              sx={{
                borderRadius: "999px",
                overflow: "hidden",
                backgroundColor: "#F9F6EE",
                width: "100%",
              }}
            >
              <InputBase
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flex: 1,
                  padding: "12px 20px",
                  fontFamily: "Manrope",
                  fontSize: { xs: "0.875rem", md: "16px" },
                }}
              />
              <Button
                onClick={handleSubscribe}
                sx={{
                  backgroundColor: "#121212",
                  color: "#fff",
                  borderRadius: "100px",
                  padding: "12px 24px",
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default OtherBenefitsSection;
