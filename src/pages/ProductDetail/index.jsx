import React from "react";
import HeaderMarquee from "../../components/HeaderMarquee";
import HeaderNavBar from "../../components/HeaderNavBar";
import ProductDetailSection from "../../components/ProductDetailSection";
import MarqueeAndAboutSection from "../../components/MarqueeAndAboutSection";
import ReviewSection from "../../components/ReviewSection";
import OtherBenefitsSection from "../../components/OtherBenefitsSection";

const ProductDetailPage = () => {
  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />
      <ProductDetailSection />
      <MarqueeAndAboutSection />
      <ReviewSection />
      {/* <OtherBenefitsSection /> */}
    </>
  );
};

export default ProductDetailPage;
