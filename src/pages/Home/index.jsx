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
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
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

  return (
    <>
      {/* Loader */}
      <FullScreenLoader loading={loading} />

      <HeaderMarquee />
      <Box
        sx={{
          backgroundImage: { xs: `url(${HeroBgPhone})`, md: `url(${HeroBg})` },
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
      <BestSellingProduct />
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
