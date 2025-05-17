import "../styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import Client from "shopify-buy";

// Shopify client setup
const client = Client.buildClient({
  domain: "v8tgm8-xf.myshopify.com",
  storefrontAccessToken: "f4670acc3a323f37097bc584eff54318",
});

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.product.fetchAll().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  console.log("products", products);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} loading={loading} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetailPage products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
