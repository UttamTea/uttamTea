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
import FullScreenLoader from "../../components/FullScreenLoader/FullScreenLoader";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const productDetail = await fetchProductById(id);
      setData(productDetail?.data || null);
    } catch (error) {
      console.error("Error fetching product detail:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  // ✅ Fallback to local PRODUCT_DATA if API fails or returns nothing
  useEffect(() => {
    if (id && !data) {
      const productDetails = PRODUCT_DATA.find((item) => item.id === id);
      if (productDetails) {
        setData(productDetails);
      }
    }
  }, [id, data]);

  return (
    <>
      {/* Loader */}
      <FullScreenLoader loading={loading} />

      <HeaderMarquee />
      <HeaderNavBar />
      <ProductDetailSection details={data} />
      <MarqueeAndAboutSection />
      {/* <ReviewSection /> */}
      <OtherBenefitsSection />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
