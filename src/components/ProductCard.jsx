import ProductCharacteristics from "./ProductCharacteristics";
import Button from "./Button";

function ProductCard({ id, image, name, price, year, power, country }) {
  return (
    <div className="relative flex justify-center text-xl font-medium text-dark-200">
      <div className="">
        <img
          src={image}
          alt="tractor"
          className="w-full max-w-[300px] min-h-[380px] object-cover rounded-lg"
        />
        <h4 className="mt-3 text-2xl font-semibold text-dark-400">{name}</h4>
        <p className="mt-1 mb-2">{price} сом</p>
        <ProductCharacteristics
          icon="/images/calendar-icon.svg"
          text={`Год выпуска: ${year}`}
        />
        <ProductCharacteristics
          icon="/images/power-icon.svg"
          text={`Макс. мощность: ${power}`}
        />
        <ProductCharacteristics
          icon="/images/country-icon.svg"
          text={`Страна: ${country}`}
        />
        <Button
          styleClasses="mt-3 py-3 px-5 border border-primary border-2 text-xl text-dark-400 font-medium rounded-full hover:bg-primary hover:text-white transition ease-in-out duration-200"
          isLink={true}
          to={`/products/${id}`}
        >
          <span>Узнать подробнее</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
