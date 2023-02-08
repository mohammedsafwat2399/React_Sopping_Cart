import React from "react";
import { product } from "../../assets/data/data";
import ProductCart from "../../components/product/ProductCart";
import "./product.css";

const Product = () => {
  return (
    <section className="product">
      <div className="container grid3">
        {product.map((item) => (
          <ProductCart key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Product;
