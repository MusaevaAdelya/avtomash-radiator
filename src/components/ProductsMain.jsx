import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductsGrid from "./ProductsGrid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {getRandomProducts} from "../services/productService";
import {BASE_URL} from "../config";

function ProductsMain() {
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
        const fetchOtherProducts = async () => {
            try {
                const response = await getRandomProducts();
                console.log(response);
                setOtherProducts(response);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log(error)

                }
            }
        };
        fetchOtherProducts();
    }, []);

  return (
    <div className="mt-36">
      <div className="flex flex-col items-center mx-auto lg:items-start lg:justify-between lg:flex-row ">
        <div className="text-center lg:text-start">
          <h2 className="mb-3 text-3xl font-semibold md:text-5xl text-dark-400">
            Продукты
          </h2>
          <p className="text-base md:text-2xl font-medium text-dark-200 max-w-[320px] md:max-w-[643px]">
            Ну кароче речь о том хорошо типо и так далее и все хорошо ну вроде
            все норм.
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
                                    image={model.images.length > 0 ? model.images[0].image.replace("/media", `${BASE_URL}/media`) : null}
                                    name={model.name}
                                    price={model.price}
                                    attributes={model.attributes}
                                />
                            ))}
                        </ProductsGrid>
      {/*<ProductsGrid>*/}
      {/*  <ProductCard*/}
      {/*    id={1}*/}
      {/*    image="/images/tractor-2.jpg"*/}
      {/*    name="Трактор UX1"*/}
      {/*    price="12 000 000"*/}
      {/*    year={2024}*/}
      {/*    power={900}*/}
      {/*    country="Испания"*/}
      {/*  />*/}
      {/*  <ProductCard*/}
      {/*    id={2}*/}
      {/*    image="/images/tractor-3.jpg"*/}
      {/*    name="Трактор HWW9"*/}
      {/*    price="12 000 000"*/}
      {/*    year={2024}*/}
      {/*    power={900}*/}
      {/*    country="Испания"*/}
      {/*  />*/}
      {/*  <ProductCard*/}
      {/*    id={3}*/}
      {/*    image="/images/tractor-4.jpg"*/}
      {/*    name="Трактор XCMG 1"*/}
      {/*    price="12 000 000"*/}
      {/*    year={2024}*/}
      {/*    power={900}*/}
      {/*    country="Испания"*/}
      {/*  />*/}
      {/*  <ProductCard*/}
      {/*    id={4}*/}
      {/*    image="/images/tractor-main-1.jpg"*/}
      {/*    name="Трактор UX92"*/}
      {/*    price="12 000 000"*/}
      {/*    year={2024}*/}
      {/*    power={900}*/}
      {/*    country="Испания"*/}
      {/*  />*/}
      {/*</ProductsGrid>*/}
    </div>
  );
}

export default ProductsMain;
