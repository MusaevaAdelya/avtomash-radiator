import { useState } from "react";
import Button from "../components/Button";
import { BASE_URL } from "../config";
import ProductCharacteristics from "../components/ProductCharacteristics";
import useFetchCategories from "../hooks/useFetchCategories";
import { Navigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import CardSkeletonGroup from "../components/CardSkeletonGroup";

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
        <div className="flex flex-col lg:p-4">
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
            <div className="inline-flex flex-col items-center justify-center gap-2 mt-6 mb-16 lg:flex lg:flex-row">
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
              <div className="flex flex-wrap justify-center -mx-4">
                {products?.map((product) => (
                  <div
                    key={product.id}
                    className="w-full p-4 md:w-1/2 lg:w-1/4"
                  >
                    <div className="flex flex-col h-full overflow-hidden bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                      <img
                        className="object-cover w-full h-48"
                        src={
                          product.images.length > 0
                            ? `${BASE_URL}${product.images[0].image}`
                            : "/images/placeholder.jpg"
                        }
                        alt={product.name}
                      />
                      <div className="flex flex-col flex-grow p-6">
                        <h2 className="text-lg font-bold text-gray-900 truncate">
                          {product.name}
                        </h2>
                        <div className="flex-grow">
                          {product.year && (
                            <ProductCharacteristics
                              icon="/images/calendar-icon.svg"
                              text={`Год выпуска: ${product.year}`}
                            />
                          )}
                          {product.power && (
                            <ProductCharacteristics
                              icon="/images/power-icon.svg"
                              text={`Мощность: ${product.power} л.с.`}
                            />
                          )}
                          {product.country && (
                            <ProductCharacteristics
                              icon="/images/country-icon.svg"
                              text={`Страна: ${product.country}`}
                            />
                          )}
                          {!product.year &&
                            !product.power &&
                            !product.country &&
                            product.attributes
                              .slice(0, 3)
                              .map((attr, index) => (
                                <ProductCharacteristics
                                  key={index}
                                  icon="/images/power-icon.svg"
                                  text={`${attr.key}: ${attr.value}`}
                                />
                              ))}
                        </div>
                        <Button
                          styleClasses="mt-auto w-18 py-1 px-9 border border-primary border-2 text-l text-dark-400 font-medium rounded-full hover:bg-primary hover:text-white transition duration-200"
                          isLink={true}
                          to={`/products/${product.id}`}
                        >
                          <span>Узнать подробнее</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      }
    </>
  );
}
export default ProductListPage;
