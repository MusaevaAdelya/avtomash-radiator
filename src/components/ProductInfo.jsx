import { Link } from "react-router-dom";
import Characteristic from "./Characteristic";
import ProductCard from "./ProductCard";
import ProductsGrid from "./ProductsGrid";

function ProductInfo({ data }) {
  return (
    <div className="px-5 py-10 my-10 border-t-2">
      <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2">
        <div>
          <h3 className="text-4xl font-semibold">{data.name}</h3>
          <p className="text-2xl font-semibold">{data.model}</p>
          <div className="flex mt-6 space-x-1">
            {data.allModels.map((model) => (
              <Link
                to={`/products/${model.id}`}
                className={`px-4 py-2 ${
                  data.id === model.id ? "border" : ""
                } rounded-full text-dark-200 border-dark-200`}
              >
                {model.model}
              </Link>
            ))}
          </div>
          <p className="mb-2 text-3xl font-semibold mt-9">
            От {data.price} сом
          </p>
          <button className="px-6 py-3 text-lg font-bold text-white rounded-full bg-primary">
            Оставить заявку
          </button>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {data.mainCharacteristics.map((ch) => (
            <Characteristic name={ch.name} value={ch.value} />
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-24">
        <h3 className="text-2xl font-semibold md:text-4xl">
          Остальные характеристики
        </h3>
        <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-4 md:mt-7">
          {data.otherCharacteristics.map((ch) => (
            <Characteristic name={ch.name} value={ch.value} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-semibold md:text-4xl">
          Остальные варинаты
        </h3>
        <ProductsGrid>
          <ProductCard
            id={1}
            image="/images/tractor-2.jpg"
            name="Трактор UX1"
            price="12 000 000"
            year={2024}
            power={900}
            country="Испания"
          />
          <ProductCard
            id={2}
            image="/images/tractor-3.jpg"
            name="Трактор HWW9"
            price="12 000 000"
            year={2024}
            power={900}
            country="Испания"
          />
          <ProductCard
            id={3}
            image="/images/tractor-4.jpg"
            name="Трактор XCMG 1"
            price="12 000 000"
            year={2024}
            power={900}
            country="Испания"
          />
          <ProductCard
            id={4}
            image="/images/tractor-main-1.jpg"
            name="Трактор UX92"
            price="12 000 000"
            year={2024}
            power={900}
            country="Испания"
          />
        </ProductsGrid>
      </div>
    </div>
  );
}

export default ProductInfo;
