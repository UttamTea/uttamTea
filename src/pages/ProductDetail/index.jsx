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
  }, []);

  useEffect(() => {
    if (id) {
      const productDetails = PRODUCT_DATA.filter((item) => item.id === id);
      setData(productDetails[0]);
    }
  }, [id]);

  // ✅ Razorpay payment handler
  const handlePayment = async () => {
    try {
      const res = await axios.post(
        "http://localhost:1337/api/razorpay/create-order",
        {
          amount: 500, // INR
        }
      );

      const { order } = res.data;

      const options = {
        key: "rzp_test_ZGTAPsz4bPURGT", // 🔴 Replace with your Razorpay test key
        amount: order.amount,
        currency: order.currency,
        name: "Test Product",
        description: "Test Razorpay Payment",
        order_id: order.id,
        handler: function (response) {
          alert(
            `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Rohit Maheshwari",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: false,
          emi: false,
          paylater: false,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error initiating payment.");
    }
  };
  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />

      {/* ✅ Add Razorpay payment test button here */}
      {/* <div style={{ padding: "20px", textAlign: "center" }}>
        <button
          onClick={handlePayment}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Pay ₹500
        </button>
      </div> */}

      <ProductDetailSection details={data} />
      <MarqueeAndAboutSection />
      <ReviewSection />
      <OtherBenefitsSection />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
