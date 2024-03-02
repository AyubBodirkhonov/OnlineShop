import { useContext } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { ProductsContext } from "../../contexts/product.context";
import "./shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
