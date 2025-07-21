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
import { fetchProductById } from "../../api";
import axios from "axios"; // ✅ Make sure axios is imported

const ProductDetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const getData = async () => {
    const productDetail = await fetchProductById(id);
    setData(productDetail.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    if (id) {
      const productDetails = PRODUCT_DATA.filter((item) => item.id === id);
      setData(productDetails[0]);
    }
  }, [id]);

  // ✅ Razorpay payment handler

  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />
      <ProductDetailSection details={data} />
      <MarqueeAndAboutSection />
      <ReviewSection />
      <OtherBenefitsSection />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
