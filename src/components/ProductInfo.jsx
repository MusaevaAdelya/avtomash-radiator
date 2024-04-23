import { Link } from "react-router-dom";
import Characteristic from "./Characteristic";

import ApplicationButton from "./ApplicationButton";

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
          <ApplicationButton formTitle="Отличный выбор! Оставьте номер для связи" productId={data.id}>
            <span className="whitespace-nowrap">Оставить заявку</span>
          </ApplicationButton>
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
      
    </div>
  );
}

export default ProductInfo;
