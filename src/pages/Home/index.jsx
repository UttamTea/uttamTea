import React, { useEffect, useState } from "react";
import HeaderMarquee from "../../components/HeaderMarquee";
import HeaderNavBar from "../../components/HeaderNavBar";
import HeroSection from "../../components/HeroSection";
import MarqueeAndAboutSection from "../../components/MarqueeAndAboutSection";
import ChaiTypesSection from "../../components/ChaiTypesSection";
import RealPremiumTeaSection from "../../components/RealPremiumTeaSection";
import MeetTheManSection from "../../components/MeetTheManSection";
import BestSellingProduct from "../../components/BestSellingProduct";
import InstagramSection from "../../components/InstagramSection";
import KnowYourTeasSection from "../../components/KnowYourTeasSection";
import AssamTeaSection from "../../components/AssamTeaSection";
import FAQSection from "../../components/FAQSection";
import OtherBenefitsSection from "../../components/OtherBenefitsSection";
import { Box } from "@mui/material";
import HeroBg from "../../assets/background/HeroSectionBg.webp";
import HeroBgPhone from "../../assets/background/HeroSectionBgPhone.webp";
import Footer from "../../components/Footer";
import { fetchProducts } from "../../api";
import { payloadBaseURL } from "../../axios/url";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [heroSectionData, setHeroSectionData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const products = await fetchProducts();
      setProductsData(products?.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const res = await fetch(`${payloadBaseURL}/api/globals/home-page-hero`);
        if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
        const data = await res.json();             
        const hero = data?.docs?.[0] ?? data;
        setHeroSectionData(hero);
        // console.log("Hero Data", hero);
      } catch (err) {
        console.error("Error fetching hero section", err);
        setError(err);
      }
    };

    fetchHeroSection();
  }, []);  

  // console.log("Hero Data state", heroSectionData);

  const DesktopBgImage = heroSectionData?.backgroundImageDesktop?.url
    ? `${payloadBaseURL}${heroSectionData?.backgroundImageDesktop.url}` 
    : null;

  const PhoneBgImage = heroSectionData?.backgroundImageMobile?.url
    ? `${payloadBaseURL}${heroSectionData?.backgroundImageMobile.url}` 
    : null;

  return (
    <>
      <HeaderMarquee />
      <Box
        sx={{
          backgroundImage: { 
            xs: PhoneBgImage ? `url(${PhoneBgImage})` : `url(${HeroBgPhone})`, 
            md: DesktopBgImage ? `url(${DesktopBgImage})` : `url(${HeroBg})` },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { xs: "top", md: "center" },
          minHeight: { xs: "120vh", md: "100vh" },
          width: "100%",
        }}
      >
        <HeaderNavBar />
        <HeroSection />
      </Box>
      <MarqueeAndAboutSection />
      <ChaiTypesSection data={productsData} />
      <RealPremiumTeaSection />
      <MeetTheManSection />
      <BestSellingProduct data={productsData} />
      <InstagramSection />
      <KnowYourTeasSection />
      <AssamTeaSection data={productsData?.slice(1)} />
      <FAQSection />
      <OtherBenefitsSection />
      <Footer />
    </>
  );
};

export default Home;
