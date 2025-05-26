import React, { useEffect, useState } from "react";
import HeaderMarquee from "../../components/HeaderMarquee";
import HeaderNavBar from "../../components/HeaderNavBar";
import ProductDetailSection from "../../components/ProductDetailSection";
import MarqueeAndAboutSection from "../../components/MarqueeAndAboutSection";
import ReviewSection from "../../components/ReviewSection";
import OtherBenefitsSection from "../../components/OtherBenefitsSection";
import { useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../../constant";
import Footer from "../../components/Footer";

const ProductDetailPage = () => {
  const { id } = useParams(); // get the dynamic id from URL

  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      const productDetails = PRODUCT_DATA.filter((item) => item.id === id);
      setData(productDetails[0]);
    }
  }, [id]);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />
      <ProductDetailSection data={data} />
      <MarqueeAndAboutSection />
      <ReviewSection />
      <OtherBenefitsSection />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
