import "../styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Success from "./pages/Success";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/success" element={<Success />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>
    </>
  );
}

export default App;
