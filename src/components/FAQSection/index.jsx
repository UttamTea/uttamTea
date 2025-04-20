import React, { useState } from "react";
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

const faqData = [
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContainerWrapper>
      <Box px="20px" mt="140px">
        <Typography
          fontSize={"2.5rem"}
          color="#121212"
          fontFamily={"Literata"}
          lineHeight={"3rem"}
          textAlign="center"
          fontWeight={400}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          color="#535353"
          fontFamily={"Manrope"}
          fontSize={"1rem"}
          lineHeight={"26px"}
          fontWeight={400}
          mt={1}
          mb={4}
          textAlign={"center"}
          maxWidth={"589px"}
          marginX={"auto"}
        >
          Have questions? We have got answers. Find everything you need to know
          about Uttam Tea right here.
        </Typography>

        <Box maxWidth="928px" mx="auto" mt={"72px"}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                border: "1px solid #EDE5DB",
                boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                mb: "0.75rem",
                borderRadius: "14px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                overflow: "hidden",
                pt: "18px",
                px: "18px",
                pb: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton>
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
                  fontSize: "1.5rem",
                  fontFamily: "Literata",
                  lineHeight: "26px",
                  //   padding: "20px",
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: "#535353",
                  fontWeight: 400,
                  fontSize: "1rem",
                  fontFamily: "Manrope",
                  lineHeight: "24px",
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
