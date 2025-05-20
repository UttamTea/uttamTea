import React from "react";
import HeaderMarquee from "../../components/HeaderMarquee";
import HeaderNavBar from "../../components/HeaderNavBar";
import HeroSection from "../../components/HeroSection";
import MarqueeAndAboutSection from "../../components/MarqueeAndAboutSection";
import ChaiTypesSection from "../../components/ChaiTypesSection";
import RealPremiumTeaSection from "../../components/RealPremiumTeaSection";
import WatchHowUttamTeaSection from "../../components/WatchHowUttamTeaSection";
import MeetTheManSection from "../../components/MeetTheManSection";
import ReviewSection from "../../components/ReviewSection";
import BestSellingProduct from "../../components/BestSellingProduct";
import InstagramSection from "../../components/InstagramSection";
import KnowYourTeasSection from "../../components/KnowYourTeasSection";
import AssamTeaSection from "../../components/AssamTeaSection";
import FAQSection from "../../components/FAQSection";
import OtherBenefitsSection from "../../components/OtherBenefitsSection";

const Home = () => {
  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />
      <HeroSection />
      <MarqueeAndAboutSection />
      {/* <ChaiTypesSection /> */}
      <RealPremiumTeaSection />
      <WatchHowUttamTeaSection />
      {/* <MeetTheManSection /> */}
      <ReviewSection />
      <BestSellingProduct />
      {/* <InstagramSection />
      <KnowYourTeasSection />
      <AssamTeaSection />
      <FAQSection />
      <OtherBenefitsSection /> */}
    </>
  );
};

export default Home;
