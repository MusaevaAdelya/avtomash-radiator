import { Link } from "react-router-dom";

function ProductCardBordered({ tractor }) {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4">
      <div className="flex flex-col h-full overflow-hidden bg-white border-2 border-gray-200 rounded-lg shadow-lg border-opacity-60">
        <img
          className="object-cover w-full" // Removed the height restriction to make it more stretched
          style={{ height: "200px" }} // Added inline style to control the image height
          src={tractor.img}
          alt="Трактор"
        />
        <div className="flex-grow py-6 ">
          <h2 className="mb-1 text-2xl font-semibold text-dark-400">
            {tractor.name}
          </h2>
          <div className="mb-3 leading-relaxed">
            <div className="flex items-center mb-1">
              <img
                src="/images/calendar-icon.svg"
                alt="Год"
                className="w-4 h-4 mr-2"
              />
              <span className="text-xl text-dark-200">
                Год выпуска: {tractor.date}
              </span>
            </div>
            <div className="flex items-center mb-1">
              <img
                src="/images/power-icon.svg"
                alt="Мощность"
                className="w-4 h-4 mr-2"
              />
              <span className="text-xl text-dark-200">
                Мощность: {tractor.hp} л.с.
              </span>
            </div>
            <div className="flex items-center mb-1">
              <img
                src="/images/country-icon.svg"
                alt="Страна"
                className="w-4 h-4 mr-2"
              />
              <span className="text-xl text-dark-200">
                Страна: {tractor.country}
              </span>
            </div>
          </div>
          <Link
            to={`/products/${tractor.id}`}
            className="px-6 py-2 mb-4 text-xl font-medium transition duration-300 ease-in-out bg-white border-2 rounded-full shadow-sm text-dark-400 border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Узнать подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCardBordered;
