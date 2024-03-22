import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../component/category-preview/category-preview.component";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            products={products}
            title={title}
          />
        );
      })}
    </>
  );
}
