import { useState } from "react";
import { BASE_URL } from "../config";
import useFetchCategories from "../hooks/useFetchCategories";
import { Navigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import CardSkeletonGroup from "../components/CardSkeletonGroup";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";

function ProductListPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, isProductsLoading, isProductsError] =
    useFetchProducts(selectedCategory);
  const [categories, isCategoriesLoading, isCategoriesError] =
    useFetchCategories(setSelectedCategory);

  if (isProductsError || isCategoriesError) {
    return <Navigate to="/fail" replace />;
  }

  return (
    <>
      {
        <div className="flex flex-col mb-10 md:mb-24 lg:p-4">
          <div className="flex flex-col items-center justify-center lg:p-5">
            <h1 className="text-4xl font-semibold lg:text-6xl md:text-5xl">
              Продукция
            </h1>
            <p className="mt-4 font-medium  max-w-[641px] text-center md:text-lg text-base">
              Компания с многолетним опытом поставок специальной и
              сельскохозяйственной техники. Самый широкий ассортимент
              представленный на рынке Кыргызстана известных международных
              брендов.
            </p>
          </div>
          {!isCategoriesLoading && (
            <div className="inline-flex flex-col items-center justify-center gap-2 mt-6 mb-10 md:mb-16 lg:flex lg:flex-row">
              {categories?.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "text-dark-200 "
                  }  font-medium cursor-pointer rounded-3xl !inline-block`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
          {isProductsLoading ? (
            <CardSkeletonGroup />
          ) : (
            <>
              <ProductsGrid>
                {products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={
                      product.images.length > 0
                        ? `${BASE_URL}${product.images[0].image}`
                        : "/images/placeholder.jpg"
                    }
                    name={product.name}
                    price={product.price}
                    attributes={product.attributes}
                  />
                ))}
              </ProductsGrid>
            </>
          )}
        </div>
      }
    </>
  );
}
export default ProductListPage;
