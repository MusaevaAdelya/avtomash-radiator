import ProductCharacteristics from "./ProductCharacteristics";
import Button from "./Button";

function ProductCard({
  id,
  image,
  name,
  price,
  year,
  power,
  country,
  attributes,
}) {
  const handleClick = () => {
    window.location = `/products/${id}`;
  };

  return (
    <div className="relative flex flex-col justify-center justify-between text-xl font-medium text-dark-200">
      <div className="flex-grow">
        <img
          src={image}
          alt="tractor"
          onClick={handleClick}
          className="w-full min-h-[380px] object-cover rounded-lg cursor-pointer bg-slate-200"
        />
        <h4 className="mt-3 text-2xl font-semibold text-dark-400">
          {name.length > 18 ? `${name.substring(0, 18)}...` : name}
        </h4>
        <p className="mt-1 mb-2">
          {price !== "Договорная" ? `${price} сом` : "Договорная"}
        </p>

        {year && (
          <ProductCharacteristics
            icon="/images/calendar-icon.svg"
            text={`Год выпуска: ${year}`}
          />
        )}
        {power && (
          <ProductCharacteristics
            icon="/images/power-icon.svg"
            text={`Макс. мощность: ${power}`}
          />
        )}
        {country && (
          <ProductCharacteristics
            icon="/images/country-icon.svg"
            text={`Страна: ${country}`}
          />
        )}
        {!year &&
          !power &&
          !country &&
          attributes.slice(0, 3).map((attr, index) => {
            const text = `${attr.key}: ${attr.value}`;
            const displayText =
              text.length > 18 ? `${text.substring(0, 18)}...` : text; // Укорачиваем текст, если он длиннее 24 символов

            return (
              <ProductCharacteristics
                key={index}
                icon="/images/power-icon.svg" // Замените "/images/power-icon.svg" на нужную иконку, если это требуется
                text={displayText}
              />
            );
          })}
      </div>
      <Button
        styleClasses="mt-3 py-3 px-5 border border-primary border-2 text-xl text-dark-400 font-medium rounded-full hover:bg-primary hover:text-white transition ease-in-out duration-200 "
        isLink={false}
        onClickHandler={handleClick}
        // to={`/products/${id}`}
      >
        <span>Узнать подробнее</span>
      </Button>
    </div>
  );
}

export default ProductCard;
