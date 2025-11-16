import React, { useState, useEffect } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import { Box, Button, Typography } from "@mui/material";
import KASHMIRI_KAHRA from "../../assets/teas/Kashmiri.png";
import MATCH_TEA from "../../assets/teas/Match.png";
import GREEN_TEA from "../../assets/teas/Green.png";
import NOON_TEA from "../../assets/teas/Noon.png";
import BLACK_TEA from "../../assets/teas/Black.png";
import WHITE_TEA from "../../assets/teas/White.png";
import { payloadBaseURL } from "../../axios/url";

const STATIC_IMG_MAP = {
  "Kashmiri Kahwa": KASHMIRI_KAHRA,
  "Matcha Tea": MATCH_TEA,
  "Green Tea": GREEN_TEA,
  "Noon Chai": NOON_TEA,
  "Black Tea": BLACK_TEA,
  "White Tea": WHITE_TEA,
};

const DATA = [
  {
    title: "Kashmiri Kahwa",
    description:
      "A fragrant blend of green tea, saffron, cinnamon, and cardamom, Kashmiri Kahwa is a warm hug in a cup. Traditionally brewed in the valleys of Kashmir, it offers a delicate balance of sweetness and spice. Perfect for cold mornings, it soothes the senses while promoting digestion and keeping you refreshed throughout the day.",
    img: KASHMIRI_KAHRA,
  },

  {
    title: "Matcha Tea",
    description:
      "Finely ground from premium Japanese green tea leaves, Matcha is rich in antioxidants and vibrant in flavour. Its creamy, umami taste pairs beautifully with its smooth texture, offering a calm, focused energy. Traditionally whisked into a frothy drink, Matcha is as much a mindful ritual as it is a healthful beverage.",
    img: MATCH_TEA,
  },
  {
    title: "Green Tea",
    description:
      "Fresh, light, and naturally invigorating, Green Tea is celebrated for its clean taste and health benefits. Packed with antioxidants, it supports metabolism, boosts energy, and offers gentle refreshment. Whether sipped plain or with a hint of lemon, Green Tea is the perfect everyday companion for those seeking balance and vitality.",
    img: GREEN_TEA,
  },
  {
    title: "Noon Chai",
    description:
      "A traditional pink tea from Kashmir, Noon Chai is brewed with green tea leaves, milk, baking soda, and salt. Its unique savoury taste, creamy texture, and rosy hue make it truly distinctive. Served hot, often with bread or nuts, it’s a cherished comfort drink that warms both the body and heart.",
    img: NOON_TEA,
  },
  {
    title: "Black Tea",
    description:
      "Bold, robust, and deeply satisfying, Black Tea is India’s timeless brew. From the strong Assam variety to the malty Darjeeling, its flavour profile is rich and full-bodied. Perfect with milk, sugar, or spices, it’s a versatile tea that fuels mornings, refreshes afternoons, and brings people together over a hearty cup.",
    img: BLACK_TEA,
  },
  {
    title: "White Tea",
    description:
      "The most delicate of all teas, White Tea is made from the youngest tea buds, minimally processed to preserve their natural goodness. With a light, sweet flavour and subtle aroma, it’s rich in antioxidants and gentle on the palate. A soothing choice for moments when you want pure, calming refreshment.",
    img: WHITE_TEA,
  },
];


const buildImageSrc = (fileObj) => {
  if (!fileObj) return null;

  if (typeof fileObj === "string") return fileObj;
  
  if (fileObj.url && fileObj.url.startsWith("http")) return fileObj.url;
  
  if (fileObj.url) {
    const base = payloadBaseURL?.endsWith("/") ? payloadBaseURL.slice(0, -1) : payloadBaseURL;
    return `${base}${fileObj.url}`;
  }
  
  return null;
};

const findStaticImage = (title) => {
  if (!title) return null;
  return STATIC_IMG_MAP[title] || STATIC_IMG_MAP[title.trim()] || null;
};


const SelectedTeaCard = ({ index, list }) => {

  const itemData = list?.[index] ?? DATA[index];
  if (!itemData) return null;

  return (
    <Box
      display={"flex"}
      gap={"6rem"}
      mt={"4.5rem"}
      px={{ xs: "1rem", md: "0" }}
    >
      <img src={itemData.img} className="small_screen_hide" />
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
        <Button
          variant="black"
          sx={{ 
            mt: "2.5rem",
            cursor: "pointer",
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          onClick={() => {
            const section = document.getElementById("productsSection");
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
        >
          Explore our tea collection
        </Button>
      </Box>
    </Box>
  );
};
const KnowYourTeasSection = () => {
  const [selectedTea, setSelectedTea] = useState(0);

  const [teaData, setTeaData] = useState(DATA);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchKnowYourTeasSection = async () => {
      try {
        const res = await fetch(`${payloadBaseURL}/api/know-your-teas`);
        if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
        const data = await res.json();             
        const SectionData = data?.docs ?? data;

        if (!SectionData || SectionData.length === 0) {
          // nothing from payload — keep static DATA
          console.warn("KnowYourTeas: no items found in response, keeping static DATA", data);
          return;
        }

        const mapped = SectionData.map((item) => {
          const title = item.name ?? "";
          const description = item.description ?? "";
          const imageObj = item.image ?? item.image?.[0] ?? null;

          let imgSrc = buildImageSrc(imageObj);
          if (!imgSrc) {
            imgSrc = findStaticImage(title) ?? null;
          }
          return {
            title,
            description,
            img: imgSrc,
            id: item.id ?? item._id ?? undefined,
          };
        });

        const finalList = mapped.slice().reverse();

        setTeaData(finalList);
        // console.log("know your teas Section Data", teaData);

        setSelectedTea((prev) => {
          if (finalList.length === 0) return 0;
          return Math.min(prev, finalList.length - 1);
        });

      } catch (err) {
        console.error("Error fetching hero section", err);
        setError(err);
      }
    };

    fetchKnowYourTeasSection();
  }, []);

  return (
    <ContainerWrapper>
      <Box
        px={{ xs: "0", md: "106px" }}
        mt={{ xs: "76px", md: "140px" }}
        mb={"5.2rem"}
      >
        <Typography
          color="#121212"
          fontSize={{ xs: "1.75rem", md: "2.5rem" }}
          lineHeight={{ xs: "2rem", md: "3rem" }}
          fontWeight={400}
          textAlign={"center"}
          fontFamily={"Literata"}
          mb={"50px"}
        >
          Know your Teas
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="2.5rem"
          className="hide-scrollbar"
          justifyContent={{ xs: "flex-start", md: "center" }}
          sx={{
            overflowX: "auto",
            maxWidth: "100%",
            paddingInline: "1rem", // add left/right padding
            scrollSnapType: "x mandatory", // optional: smooth scroll behavior
            scrollPaddingLeft: "1rem", // ensures first item is visible
          }}
        >
          {teaData?.map((item, index) => {
            // console.log("Rendering tea item:", item, "at index:", index);
            return (
              <Box
                key={item.id || index}
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
                  textAlign={{ xs: "center", md: "start" }}
                  whiteSpace={"nowrap"}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <SelectedTeaCard index={selectedTea} list={teaData}/>
      </Box>
    </ContainerWrapper>
  );
};

export default KnowYourTeasSection;
