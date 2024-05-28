import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductsGrid from "./ProductsGrid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { BASE_URL } from "../config";
import useFetchRandomProducts from "../hooks/useFetchRandomProducts";

function ProductsMain() {
  const [otherProducts, isLoading, isError] = useFetchRandomProducts();

  return (
    <>
      {otherProducts && !isLoading && !isError && (
        <div className="my-36">
          <div className="flex flex-col items-center mx-auto lg:items-start lg:justify-between lg:flex-row ">
            <div className="text-center lg:text-start">
              <h2 className="mb-3 text-3xl font-semibold md:text-5xl text-dark-400">
                Продукты
              </h2>
              <p className="text-base md:text-2xl font-medium text-dark-200 max-w-[320px] md:max-w-[643px]">
                Ну кароче речь о том хорошо типо и так далее и все хорошо ну
                вроде все норм.
              </p>
            </div>
            <Button
              styleClasses="mr-4 py-2.5 px-8 border border-dark-200 text-base md:text-xl text-dark-200 font-medium lg:rounded-full rounded-md flex items-center hover:bg-primary hover:border-primary hover:text-white transition ease-in-out duration-200 lg:self-center mt-5 lg:mt-0"
              isLink={true}
              to={`/products`}
            >
              <span className="mr-2">Посмотреть все</span>
              <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
            </Button>
          </div>
          <ProductsGrid>
            {otherProducts.map((model, index) => (
              <ProductCard
                key={index}
                id={model.id}
                image={
                  model.images.length > 0
                    ? model.images[0].image.replace(
                        "/media",
                        `${BASE_URL}/media`
                      )
                    : null
                }
                name={model.name}
                price={model.price}
                attributes={model.attributes}
              />
            ))}
          </ProductsGrid>
        </div>
      )}

      {isError && (
        <div
          class="flex bg-red-100 rounded-lg p-4 my-10 text-sm text-red-700"
          role="alert"
        >
          <svg
            class="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <span class="font-medium">Error occurred!</span> Failed fetching product information from the server
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsMain;
