import React, { useState, useEffect } from "react";
import ContainerWrapper from "../common/ContainerWrapper";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { payloadBaseURL } from "../../axios/url";

const faqStaticData = [
  {
    question: "What makes your chai different from others on the market?",
    answer:
      "Our chai is crafted using an 80-year-old family recipe, blending bold Assam tea with hand-ground, whole spices. It’s completely natural, made in small batches, and delivers the authentic kadak flavor you remember from home.",
  },
  {
    question: "Can I brew this without milk?",
    answer:
      "Yes, you can brew it without milk. It will taste more like a spiced black tea and still deliver the same aroma and spice.",
  },
  {
    question: "How should I store the tea after opening?",
    answer:
      "Keep the tea in an airtight container in a cool, dry place, away from direct sunlight to maintain freshness.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping charges and times may vary based on location.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3-5 business days within India and 7-10 business days for international orders.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState("panel0");
  const [faqData, setFaqData] = useState();
  const [error, setError] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
      const fetchFAQSection = async () => {
        try {
          const res = await fetch(`${payloadBaseURL}/api/faqs`);
          if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
          const data = await res.json();             
          const raw = data?.docs ?? data;
          
          let itemsArray = null;
          if (Array.isArray(raw)) itemsArray = raw;
          else if (raw && typeof raw === "object") {
            // try to pick a property that's an array of objects (defensive)
            const possible = Object.values(raw).find((v) => Array.isArray(v) && v.length && typeof v[0] === "object");
            itemsArray = possible ?? null;
          }

          if (!itemsArray || itemsArray.length === 0) {
            // nothing useful returned — keep fallback static data
            setFaqData(null);
            return;
          }

          // Map each payload FAQ to the UI shape
          const mapped = itemsArray.map((f) => ({
            question: f.question ?? f.title ?? "",
            answer: f.answer ?? f.content ?? "",
            id: f.id ?? f._id ?? undefined,
          })).reverse();

          setFaqData(mapped);
        } catch (err) {
          console.error("Error fetching FAQs section", err);
          setError(err);
        }
      };
  
      fetchFAQSection();
    }, []);  

    const list = faqData ?? faqStaticData;

  return (
    <ContainerWrapper>
      <Box
        id="FAQSECTION"
        px={{ xs: "0", md: "20px" }}
        mt={{ xs: "76px", md: "140px" }}
      >
        <Typography
          px={{ xs: "1rem", md: "0" }}
          fontSize={{ xs: "1.75rem", md: "2.5rem" }}
          color="#121212"
          fontFamily={"Literata"}
          lineHeight={{ xs: "2rem", md: "3rem" }}
          textAlign="center"
          fontWeight={400}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          px={{ xs: "1rem", md: "0" }}
          color="#535353"
          fontFamily={"Manrope"}
          fontSize={{ xs: "0.875rem", md: "1rem" }}
          lineHeight={{ xs: "1.25rem", md: "26px" }}
          fontWeight={400}
          mt={{ xs: "12px", md: 1 }}
          mb={4}
          textAlign={"center"}
          maxWidth={"589px"}
          marginX={"auto"}
        >
          Have questions? We have got answers. Find everything you need to know
          about Uttam Tea right here.
        </Typography>

        <Box maxWidth="928px" mx="auto" mt={{ xs: "40px", md: "72px" }}>
          {list.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                border: { xs: "none", md: "1px solid #EDE5DB" },
                borderBottom: { xs: "1px solid #EDE5DB", md: "none" },
                boxShadow: {
                  xs: "none",
                  md: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                },
                margin: { xs: "0 !important", md: "1rem !important" },
                mb: { xs: "0", md: "0.75rem" },
                borderRadius: { xs: "0", md: "14px" },
                backgroundColor: { xs: "transparent", md: "#fff" },
                transition: "all 0.3s ease",
                overflow: "hidden",
                pt: "18px",
                pb: "18px",
                px: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton component="span">
                    {expanded === `panel${index}` ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                }
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontFamily: "Literata",
                  lineHeight: { xs: "1.5rem", md: "26px" },
                  //   padding: "20px",
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: "#535353",
                  fontWeight: 400,
                  fontSize: { xs: "0.875rem ", md: "1rem" },
                  fontFamily: "Manrope",
                  lineHeight: { xs: "22px", md: "24px" },
                  maxWidth: "715px",
                }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default FAQSection;
