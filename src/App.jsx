import "../styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/success/:orderId" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
