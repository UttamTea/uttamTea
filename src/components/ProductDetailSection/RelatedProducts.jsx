import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AssamTeaSection from "../AssamTeaSection";
import { useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../../constant";

const RelatedProducts = () => {
  const { id } = useParams(); // get the dynamic id from URL

  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      const productDetails = PRODUCT_DATA.filter((item) => item.id !== id);
      setData(productDetails);
    }
  }, [id]);
  return (
    <Box mt={{ xs: "64px", md: "112px" }}>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2.5rem" }}
        lineHeight={{ xs: "2rem", md: "3rem" }}
        fontFamily={"Literata"}
        fontWeight={400}
        color="#121212"
      >
        Related Products
      </Typography>
      <AssamTeaSection productDetail={true} data={data} />
    </Box>
  );
};

export default RelatedProducts;
